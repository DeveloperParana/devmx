import { UseCase, User } from '@devmx/shared-api-interfaces';
import { UpdateUser } from '../../lib/dtos';
import { UsersService } from '../services';

export class UpdateUserUseCase implements UseCase<UpdateUser, User | null> {
  constructor(private usersService: UsersService) {}

  async execute(data: UpdateUser) {
    return this.usersService.update(data.id, data);
  }
}
