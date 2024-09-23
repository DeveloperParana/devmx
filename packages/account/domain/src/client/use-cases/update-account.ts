import { AccountOut, UseCase } from '@devmx/shared-api-interfaces';
import { UpdateAccount } from '../../lib/dtos';
import { AccountService } from '../services';

export class UpdateAccountUseCase
  implements UseCase<UpdateAccount, AccountOut>
{
  constructor(private accountService: AccountService) {}

  execute(data: UpdateAccount) {
    return this.accountService.update(data.id, data);
  }
}
