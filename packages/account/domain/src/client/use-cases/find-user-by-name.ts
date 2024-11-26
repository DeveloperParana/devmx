import { UseCase, User } from '@devmx/shared-api-interfaces';
import { UserService } from '../services';

export class FindUserByNameUseCase implements UseCase<string, User | null> {
  constructor(private userService: UserService) {}

  execute(name: string) {
    return this.userService.findOneByName(name);
  }
}
