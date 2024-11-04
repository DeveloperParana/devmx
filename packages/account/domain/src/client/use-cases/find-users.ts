import { Page, QueryParams, UseCase, User } from '@devmx/shared-api-interfaces';
import { UserService } from '../services';

export class FindUsersUseCase
  implements UseCase<QueryParams<User>, Page<User>>
{
  constructor(private userService: UserService) {}

  execute(params: QueryParams<User>) {
    return this.userService.find(params);
  }
}
