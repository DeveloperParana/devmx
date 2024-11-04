import { Page, QueryParams, UseCase, User } from '@devmx/shared-api-interfaces';
import { UsersService } from '../services';

export class FindUsersUseCase
  implements UseCase<QueryParams<User>, Page<User>>
{
  constructor(private usersService: UsersService) {}

  async execute(params: QueryParams<User>) {
    if (params.filter) {
      if (params.filter.displayName) {
        params.filter.displayName = new RegExp(params.filter.displayName, 'i');
      } else {
        delete params.filter.displayName;
      }

      if (params.filter.roles) {
        const role = `roles.${params.filter.roles}`;
        params.filter[role as 'roles'] = true;
        delete params.filter.roles
      } else {
        delete params.filter.roles;
      }
    }

    return this.usersService.find(params);
  }
}
