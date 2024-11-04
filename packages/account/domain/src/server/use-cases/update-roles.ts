import { UseCase, User } from '@devmx/shared-api-interfaces';
import { UpdateRoles } from '../../lib/dtos';
import { UsersService } from '../services';

export class UpdateRolesUseCase implements UseCase<UpdateRoles, User | null> {
  constructor(private usersService: UsersService) {}

  async execute({ id, roles }: UpdateRoles) {
    return this.usersService.updateRoles(id, roles);
  }
}
