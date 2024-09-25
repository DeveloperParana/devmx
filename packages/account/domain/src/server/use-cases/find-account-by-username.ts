import { Account, UseCase } from '@devmx/shared-api-interfaces';
import { AccountsService } from '../services';

export class FindAccountByUsernameUseCase
  implements UseCase<string, Account | null>
{
  constructor(private accountsService: AccountsService) {}

  async execute(username: string) {
    const value = new RegExp(username, 'i');
    const filter = { username: value };
    return this.accountsService.findOneBy(filter);
  }
}
