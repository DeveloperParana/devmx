import { UseCase, User } from '@devmx/shared-api-interfaces';
import { UpdateRoles } from '../../lib/dtos';
import { UserService } from '../services';

export class UpdateRolesUseCase implements UseCase<UpdateRoles, User | null> {
  constructor(private userService: UserService) {}

  execute(data: UpdateRoles) {
    return this.userService.updateRoles(data);
  }
}
