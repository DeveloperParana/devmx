import { UseCase, User } from '@devmx/shared-api-interfaces';
import { UsersService } from '../services';

export class FindUserByIDUseCase implements UseCase<string, User | null> {
  constructor(private usersService: UsersService) {}

  async execute(id: string) {
    return this.usersService.findOne(id);
  }
}
