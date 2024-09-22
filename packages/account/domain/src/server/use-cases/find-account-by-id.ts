import { Account, UseCase } from '@devmx/shared-api-interfaces';
import { AccountsService } from '../services';

export class FindAccountByIDUseCase implements UseCase<string, Account> {
  constructor(private accountsService: AccountsService) {}

  async execute(id: string) {
    const account = await this.accountsService.findOne(id);

    if (!account) {
      throw `Conta não encontrada`;
    }

    return account;
  }
}
