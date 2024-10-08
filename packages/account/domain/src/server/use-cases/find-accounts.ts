import { AccountsService } from '../services';
import {
  Page,
  Account,
  UseCase,
  QueryParams,
  FindFilter,
  FindParams,
} from '@devmx/shared-api-interfaces';

export class FindAccountsUseCase
  implements UseCase<QueryParams<Account>, Page<Account>>
{
  constructor(private accountsService: AccountsService) {}

  async execute(params: QueryParams<Account>) {
    const filter: FindFilter<Account> = {};

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

    const findParams: FindParams<Account> = {
      page: params.page,
      size: params.size,
      filter,
    };

    return this.accountsService.find(findParams);
  }
}
