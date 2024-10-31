import { createQueryParams } from '@devmx/shared-util-data';
import { QueryByRoleParams } from '../../lib/dtos';
import { AccountService } from '../services';
import {
  Page,
  Account,
  UseCase,
  AccountOut,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export class FindAccountsByRoleUseCase
  implements UseCase<QueryParams<Account>, Page<AccountOut>>
{
  constructor(private accountService: AccountService) {}

  execute({ role, ...params }: QueryByRoleParams<AccountOut>) {
    return this.accountService.findByRole(role, createQueryParams(params));
  }
}
