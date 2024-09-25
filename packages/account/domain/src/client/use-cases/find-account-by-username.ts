import { UseCase, AccountOut } from '@devmx/shared-api-interfaces';
import { AccountService } from '../services';

export class FindAccountByUsernameUseCase
  implements UseCase<string, AccountOut>
{
  constructor(private accountService: AccountService) {}

  execute(username: string) {
    return this.accountService.findOneByUsername(username);
  }
}
