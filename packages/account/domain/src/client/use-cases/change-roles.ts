import { AccountOut, UseCase } from '@devmx/shared-api-interfaces';
import { ChangeRoles } from '../../lib/dtos';
import { AccountService } from '../services';

export class ChangeRolesUseCase implements UseCase<ChangeRoles, AccountOut> {
  constructor(private accountService: AccountService) {}

  execute(data: ChangeRoles) {
    return this.accountService.changeRoles(data.id, data);
  }
}
