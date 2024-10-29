import { Account, UseCase } from '@devmx/shared-api-interfaces';
import { AccountsService } from '../services';

export class FindAccountByUsernameUseCase
  implements UseCase<string, Account | null>
{
  constructor(private accountsService: AccountsService) {}

  async execute(username: string) {
    return this.accountsService.findOneBy({username});
  }
}
