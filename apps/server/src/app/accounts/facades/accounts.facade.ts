import { PageDto, QueryParamsDto } from '../../shared/dtos';
import { plainToInstance } from 'class-transformer';
import { AccountsService, PresentationsService } from '../services';
import {
  AccountDto,
  CreateAccountDto,
  UpdateAccountDto,
} from '../dtos';

export class AccountsFacade {
  constructor(
    private readonly accountsService: AccountsService,
    private readonly presentationsService: PresentationsService
  ) {}

  async create(createAccountDto: CreateAccountDto) {
    const account = await this.accountsService.create(createAccountDto);
    return plainToInstance(AccountDto, account);
  }

  async find(params: QueryParamsDto<AccountDto>) {
    const { data, items, pages } = await this.accountsService.find(params);
    const accounts = plainToInstance(AccountDto, data);
    return new PageDto(accounts, items, pages);
  }

  async findOne(id: string) {
    const account = await this.accountsService.findOne(id);
    return plainToInstance(AccountDto, account);
  }

  async update(id: string, updateAccountDto: UpdateAccountDto) {
    const account = await this.accountsService.update(id, updateAccountDto);
    return plainToInstance(AccountDto, account);
  }

  async remove(id: string) {
    const account = this.accountsService.remove(id);
    return plainToInstance(AccountDto, account);
  }
}
