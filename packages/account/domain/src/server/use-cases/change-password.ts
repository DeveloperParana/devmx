import { Account, UseCase } from '@devmx/shared-api-interfaces';
import { ChangePassword } from '../../lib/dtos';
import { AccountsService } from '../services';
import { CryptoService } from '../ports';
import {
  RequestError,
  NotFoundError,
  PersistenceError,
} from '@devmx/shared-util-errors';

export class ChangePasswordUseCase implements UseCase<ChangePassword, Account> {
  constructor(
    private accountsService: AccountsService,
    private cryptoService: CryptoService
  ) {}

  async execute(data: ChangePassword) {
    const account = await this.accountsService.findOne(data.id);

    if (!account) {
      throw new NotFoundError('Conta não encontrada');
    }

    const matchCurrentPassword = this.cryptoService.compare(
      data.currentPassword,
      account.password
    );

    if (!matchCurrentPassword) {
      throw new RequestError('Senha atual incorreta');
    }

    const password = this.cryptoService.hash(data.newPassword);

    const changed = await this.accountsService.update(data.id, {password});

    if (!changed) {
      throw new PersistenceError('Problema ao persistir nova senha');
    }

    return changed;
  }
}
