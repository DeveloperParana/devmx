import { UseCase, User } from '@devmx/shared-api-interfaces';
import { UsersService } from '../services';

export class FindUserByNameUseCase implements UseCase<string, User | null> {
  constructor(private usersService: UsersService) {}

  async execute(name: string) {
    return this.usersService.findByName(name);
  }
}
