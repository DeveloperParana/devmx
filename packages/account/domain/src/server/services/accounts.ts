import {
  Page,
  Account,
  Creatable,
  QueryFilter,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export abstract class AccountsService {
  abstract create(data: Creatable<Account>): Promise<Account>;

  abstract find(params: QueryParams<Account>): Promise<Page<Account>>;

  abstract findOne(id: string): Promise<Account | null>;

  abstract findOneBy(filter: QueryFilter<Account>): Promise<Account | null>;

  abstract update(id: string, data: Partial<Account>): Promise<Account | null>;

  abstract remove(id: string): Promise<Account | null>;
}
