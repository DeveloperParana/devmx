import { ConflictError, PersistenceError } from '@devmx/shared-util-errors';
import { DEFAULT_ROLES, merge } from '@devmx/shared-util-data';
import { AccountsService } from '../services';
import { CryptoService } from '../ports';
import {
  SignUp,
  Account,
  UseCase,
  AccountRole,
} from '@devmx/shared-api-interfaces';

export class SignUpUseCase implements UseCase<SignUp, Account> {
  constructor(
    private accountsService: AccountsService,
    private cryptoService: CryptoService
  ) {}

  async execute(data: SignUp) {
    const filter = { username: new RegExp(data.username, 'i') };
    const account = await this.accountsService.findOneBy(filter);

    if (account) {
      throw new ConflictError('Nome de usuário em uso');
    }

    const roles: AccountRole = merge(DEFAULT_ROLES, { member: true });

    const password = this.cryptoService.hash(data.password);
    const value = { ...data, password, roles, active: true };
    const created = await this.accountsService.create(value);

    if (!created) {
      throw new PersistenceError(
        'Algo deu errado ao persistir os dados do usuário'
      );
    }

    return created;
  }
}
