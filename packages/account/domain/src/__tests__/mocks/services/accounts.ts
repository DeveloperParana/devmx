import { UpdateAccount } from '../../../lib/dtos';
import { AccountsService } from '../../../server';
import { account } from '../dtos';
import {
  Page,
  Account,
  Creatable,
  FindParams,
  FindFilter,
  Role,
  AccountRef,
} from '@devmx/shared-api-interfaces';

export class AccountsServiceMock implements AccountsService {
  #accounts = [account] as Account[];

  async create(data: Creatable<Account>): Promise<Account> {
    return { ...data, id: '66f706967d818c4004effb48' };
  }

  async find(params: FindParams<Account>): Promise<Page<Account>> {
    throw new Error('Method not implemented.');
  }

  async complete(params: FindFilter<AccountRef>): Promise<AccountRef[]> {
    throw new Error('Method not implemented.');
  }

  findByRole(role: Role, params: FindParams<Account>): Promise<Page<Account>> {
    throw new Error('Method not implemented.');
  }

  async findOne(id: string): Promise<Account | null> {
    const account = this.#accounts.find((a) => a.id === id);

    return account ?? null;
  }

  async findOneBy(filter: FindFilter<Account>): Promise<Account | null> {
    const account = this.#accounts.find((account) => {
      if (filter.username) {
        return (filter.username as RegExp).test(account.username);
      }
      return false;
    });

    return account ?? null;
  }

  async update(
    id: string,
    data: Partial<UpdateAccount>
  ): Promise<Account | null> {
    return { ...account, ...data, id } as Account;
  }

  async remove(id: string): Promise<Account | null> {
    throw new Error('Method not implemented.');
  }
}
