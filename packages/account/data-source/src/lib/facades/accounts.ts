import { AccountDto, ChangePasswordDto, PresentationDto, UpdateAccountDto } from '../dtos';
import { PageDto, QueryParamsDto } from '@devmx/shared-data-source';
import { plainToInstance } from 'class-transformer';
import {
  ChangePasswordUseCase,
  FindAccountByIDUseCase,
  FindAccountPresentationsUseCase,
  FindAccountsUseCase,
  RemoveAccountUseCase,
  UpdateAccountUseCase,
} from '@devmx/account-domain/server';

export class AccountsFacade {
  constructor(
    private findAccountsUseCase: FindAccountsUseCase,
    private findAccountByIDUseCase: FindAccountByIDUseCase,
    private updateAccountUseCase: UpdateAccountUseCase,
    private removeAccountUseCase: RemoveAccountUseCase,
    private changePasswordUseCase: ChangePasswordUseCase,
    private findAccountPresentationsUseCase: FindAccountPresentationsUseCase
  ) {}

  // async create(createAccountDto: Editable<Account>) {
  //   const account = await this.accountsService.create(createAccountDto);
  //   return plainToInstance(AccountDto, account);
  // }

  async find(params: QueryParamsDto<AccountDto>) {
    const { data, items, pages } = await this.findAccountsUseCase.execute(
      params
    );
    const accounts = plainToInstance(AccountDto, data);
    return new PageDto(accounts, items, pages);
  }

  async findPresentations(
    account: string,
    params: QueryParamsDto<PresentationDto>
  ) {
    const { data, items, pages } =
      await this.findAccountPresentationsUseCase.execute({
        ...params,
        account,
      });
    const accounts = plainToInstance(PresentationDto, data);
    return new PageDto(accounts, items, pages);
  }

  async findOne(id: string) {
    const account = await this.findAccountByIDUseCase.execute(id);
    return plainToInstance(AccountDto, account);
  }

  async update(id: string, data: UpdateAccountDto) {
    const account = await this.updateAccountUseCase.execute({ ...data, id });
    return plainToInstance(AccountDto, account);
  }

  async remove(id: string) {
    const account = this.removeAccountUseCase.execute(id);
    return plainToInstance(AccountDto, account);
  }

  async changePassword(id: string, data: ChangePasswordDto) {
    const account = await this.changePasswordUseCase.execute({ ...data, id });
    return plainToInstance(AccountDto, account);
  }
}
