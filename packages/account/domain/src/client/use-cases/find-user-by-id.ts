import { UseCase, User } from '@devmx/shared-api-interfaces';
import { UserService } from '../services';

export class FindUserByIDUseCase implements UseCase<string, User | null> {
  constructor(private userService: UserService) {}

  execute(id: string) {
    return this.userService.findOne(id);
  }
}