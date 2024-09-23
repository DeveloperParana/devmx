import { AccountOut, UseCase } from '@devmx/shared-api-interfaces';
import { ChangePassword } from '../../lib/dtos';
import { AccountService } from '../services';

export class ChangePasswordUseCase
  implements UseCase<ChangePassword, AccountOut>
{
  constructor(private accountService: AccountService) {}

  execute(data: ChangePassword) {
    return this.accountService.changePassword(data);
  }
}
