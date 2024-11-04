import { UseCase, User } from '@devmx/shared-api-interfaces';
import { AuthenticationService } from '../services';
import { CreateUser } from '../../lib/dtos';

export class CreateUserUseCase implements UseCase<CreateUser, User> {
  constructor(private userService: AuthenticationService) {}

  execute(data: CreateUser) {
    return this.userService.createUser(data);
  }
}
