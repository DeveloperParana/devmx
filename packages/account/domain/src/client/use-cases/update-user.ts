import { UseCase, User } from '@devmx/shared-api-interfaces';
import { UpdateUser } from '../../lib/dtos';
import { UserService } from '../services';

export class UpdateUserUseCase implements UseCase<UpdateUser, User | null> {
  constructor(private userService: UserService) {}

  execute(data: UpdateUser) {
    return this.userService.update(data.id, data);
  }
}
