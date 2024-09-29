import { createQueryParams } from '@devmx/shared-util-data';
import { AccountService } from '../services';
import {
  Page,
  Account,
  UseCase,
  AccountOut,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export class FindAccountsUseCase
  implements UseCase<QueryParams<Account>, Page<AccountOut>>
{
  constructor(private accountService: AccountService) {}

  execute(params: QueryParams<Account>) {
    return this.accountService.find(createQueryParams(params));
  }
}
