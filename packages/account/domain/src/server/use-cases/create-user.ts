import { DEFAULT_ROLES, merge } from '@devmx/shared-util-data';
import { UseCase, User } from '@devmx/shared-api-interfaces';
import { CreateUser } from '../../lib/dtos';
import { UsersService } from '../services';

export class CreateUserUseCase implements UseCase<CreateUser, User> {
  constructor(private usersService: UsersService) {}

  async execute(data: CreateUser) {
    const { name, displayName, email, phone = '' } = data;

    const contact = { email, phone };

    const roles = merge(DEFAULT_ROLES, data.roles);

    const active = true;

    const user = { name, displayName, roles, contact, active };

    return this.usersService.create(user);
  }
}
