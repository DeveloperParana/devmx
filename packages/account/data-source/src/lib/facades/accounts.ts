import { PageDto, QueryParamsDto } from '@devmx/shared-data-source';
import { AuthUser } from '@devmx/shared-api-interfaces';
import { plainToInstance } from 'class-transformer';
import {
  ChangePasswordUseCase,
  ChangeRolesUseCase,
  FindAccountByIDUseCase,
  FindAccountByUsernameUseCase,
  FindAccountPresentationsUseCase,
  FindAccountsUseCase,
  RemoveAccountUseCase,
  UpdateAccountUseCase,
} from '@devmx/account-domain/server';
import {
  AccountDto,
  ChangePasswordDto,
  ChangeRolesDto,
  PresentationDto,
  UpdateAccountDto,
} from '../dtos';

export class AccountsFacade {
  constructor(
    private findAccountsUseCase: FindAccountsUseCase,
    private findAccountByIDUseCase: FindAccountByIDUseCase,
    private findAccountByUsernameUseCase: FindAccountByUsernameUseCase,
    private updateAccountUseCase: UpdateAccountUseCase,
    private removeAccountUseCase: RemoveAccountUseCase,
    private changePasswordUseCase: ChangePasswordUseCase,
    private changeRolesUseCase: ChangeRolesUseCase,
    private findAccountPresentationsUseCase: FindAccountPresentationsUseCase
  ) {}

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

  async findOneByUsername(username: string) {
    const account = await this.findAccountByUsernameUseCase.execute(username);
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

  async changeRoles(id: string, assigner: AuthUser, data: ChangeRolesDto) {
    const assign = { ...data, id };
    const account = await this.changeRolesUseCase.execute({ assigner, assign });
    return plainToInstance(AccountDto, account);
  }
}
