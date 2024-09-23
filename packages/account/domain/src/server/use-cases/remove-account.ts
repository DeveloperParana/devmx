import { Account, UseCase } from '@devmx/shared-api-interfaces';
import { PersistenceError } from '@devmx/shared-util-errors';
import { AccountsService } from '../services';

export class RemoveAccountUseCase implements UseCase<string, Account> {
  constructor(private accountsService: AccountsService) {}

  async execute(id: string) {
    const removed = await this.accountsService.remove(id);

    if (!removed) {
      throw new PersistenceError('Problema ao remover conta');
    }

    return removed;
  }
}
