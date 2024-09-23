import { UseCase, AccountOut } from '@devmx/shared-api-interfaces';
import { AccountService } from '../services';

export class FindAccountByIDUseCase
  implements UseCase<string, AccountOut>
{
  constructor(private accountService: AccountService) {}

  execute(id: string) {
    return this.accountService.findOne(id);
  }
}
