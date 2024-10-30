import { UpdateAccount } from '../../lib/dtos';
import {
  Page,
  Role,
  Account,
  Creatable,
  FindFilter,
  FindParams,
  AccountRef,
} from '@devmx/shared-api-interfaces';

// prettier-ignore
export abstract class AccountsService {
  abstract create(data: Creatable<Account>): Promise<Account>;

  abstract find(params: FindParams<Account>): Promise<Page<Account>>;

  abstract complete(filter: FindFilter<AccountRef>): Promise<AccountRef[]>;

  abstract findByRole(role: Role, params: FindParams<Account>): Promise<Page<Account>>;

  abstract findOne(id: string): Promise<Account | null>;

  abstract findOneBy(filter: FindFilter<Account>): Promise<Account | null>;

  abstract update(id: string, data: Partial<UpdateAccount>): Promise<Account | null>;

  abstract remove(id: string): Promise<Account | null>;
}
