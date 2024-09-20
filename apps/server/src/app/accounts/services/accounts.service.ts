import { PageDto, QueryFilterDto, QueryParamsDto } from '../dtos';
import { CreateAccountDto } from '../dtos/create-account.dto';
import { UpdateAccountDto } from '../dtos/update-account.dto';
import { Account } from '../schemas';

export abstract class AccountsService {
  abstract create(data: CreateAccountDto): Promise<Account>;

  abstract find(params: QueryParamsDto<Account>): Promise<PageDto<Account>>;

  abstract findOne(id: string): Promise<Account | null>;

  abstract findOneBy(filter: QueryFilterDto<Account>): Promise<Account | null>;

  abstract update(id: string, data: UpdateAccountDto): Promise<Account | null>;

  abstract remove(id: string): Promise<Account | null>;
}
