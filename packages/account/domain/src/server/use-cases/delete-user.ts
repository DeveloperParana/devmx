import { UseCase, User } from '@devmx/shared-api-interfaces';
import { UsersService } from '../services';

export class DeleteUserUseCase implements UseCase<string, User> {
  constructor(private usersService: UsersService) {}

  async execute(id: string) {
    return this.usersService.delete(id);
  }
}
