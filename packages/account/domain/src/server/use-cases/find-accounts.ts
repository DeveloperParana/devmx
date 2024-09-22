import { AccountsService } from '../services';
import {
  Page,
  Account,
  UseCase,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export class FindAccountsUseCase
  implements UseCase<QueryParams<Account>, Page<Account>>
{
  constructor(private accountsService: AccountsService) {}

  async execute(params: QueryParams<Account>) {
    return this.accountsService.find(params);
  }
}
