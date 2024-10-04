import { QueryByRoleParams } from '../dtos/query-by-role-params';
import { AccountsService } from '../services';
import {
  Page,
  UseCase,
  AccountOut,
  FindFilter,
  FindParams,
} from '@devmx/shared-api-interfaces';

export class FindAccountsByRoleUseCase
  implements UseCase<QueryByRoleParams<AccountOut>, Page<AccountOut>>
{
  constructor(private accountsService: AccountsService) {}

  execute({ role, ...params }: QueryByRoleParams<AccountOut>) {
    const filter: FindFilter<AccountOut> = {};

    if (params.filter) {
      if (params.filter.name) {
        filter['name.first'] = new RegExp(params.filter.name.toString(), 'i');
      } else {
        delete params.filter.name;
      }

      if (params.filter.username) {
        filter.username = new RegExp(params.filter.username, 'i');
      } else {
        delete params.filter.username;
      }
    }

    const findParams: FindParams<AccountOut> = {
      page: params.page,
      size: params.size,
      filter,
    };

    return this.accountsService.findByRole(role, findParams);
  }
}
