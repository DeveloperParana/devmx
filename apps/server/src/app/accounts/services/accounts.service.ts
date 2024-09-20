import { PageDto, QueryFilterDto, QueryParamsDto } from '../../shared/dtos';
import { CreateAccountDto, UpdateAccountDto } from '../dtos';
import { Account } from '../schemas';

export abstract class AccountsService {
  abstract create(data: CreateAccountDto): Promise<Account>;

  abstract find(params: QueryParamsDto<Account>): Promise<PageDto<Account>>;

  abstract findOne(id: string): Promise<Account | null>;

  abstract findOneBy(filter: QueryFilterDto<Account>): Promise<Account | null>;

  abstract update(id: string, data: UpdateAccountDto): Promise<Account | null>;

  abstract remove(id: string): Promise<Account | null>;
}
