import {
  AccountRefDto,
  JobDto,
  PageDto,
  QueryParamsDto,
} from '@devmx/shared-data-source';
import { AuthUser, Presentation, Role } from '@devmx/shared-api-interfaces';
import { plainToInstance } from 'class-transformer';
import {
  ChangePasswordUseCase,
  ChangeRolesUseCase,
  FindAccountByIDUseCase,
  FindAccountByUsernameUseCase,
  FindPresentationsByOwnerUseCase,
  FindAccountsUseCase,
  RemoveAccountUseCase,
  UpdateAccountUseCase,
  FindEventsByOwnerUseCase,
  FindAccountsByRoleUseCase,
  FindJobsByOwnerUseCase,
  CompleteAccountUseCase,
} from '@devmx/account-domain/server';
import {
  AccountDto,
  ChangePasswordDto,
  ChangeRolesDto,
  EventDto,
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
    private findPresentationsByOwnerUseCase: FindPresentationsByOwnerUseCase,
    private findJobsByOwnerUseCase: FindJobsByOwnerUseCase,
    private findEventsByOwnerUseCase: FindEventsByOwnerUseCase,
    private findAccountsByRoleUseCase: FindAccountsByRoleUseCase,
    private completeAccountUseCase: CompleteAccountUseCase
  ) {}

  async find(params: QueryParamsDto<AccountDto>) {
    const { data, items, pages } = await this.findAccountsUseCase.execute(
      params
    );
    const accounts = plainToInstance(AccountDto, data);
    return new PageDto(accounts, items, pages);
  }

  async complete(query: string) {
    const accounts = await this.completeAccountUseCase.execute(query);
    return plainToInstance(AccountRefDto, accounts);
  }

  async findPresentations(owner: string, params: QueryParamsDto<Presentation>) {
    const { data, items, pages } =
      await this.findPresentationsByOwnerUseCase.execute({ ...params, owner });

    const presentations = plainToInstance(PresentationDto, data);
    return new PageDto(presentations, items, pages);
  }

  async findJobs(owner: string, params: QueryParamsDto<JobDto>) {
    const { data, items, pages } = await this.findJobsByOwnerUseCase.execute({
      ...params,
      owner,
    });

    const jobs = plainToInstance(JobDto, data);
    return new PageDto(jobs, items, pages);
  }

  async findEvents(owner: string, params: QueryParamsDto<PresentationDto>) {
    const { data, items, pages } = await this.findEventsByOwnerUseCase.execute({
      ...params,
      owner,
    });

    const events = plainToInstance(EventDto, data);
    return new PageDto(events, items, pages);
  }

  async findByRole(role: Role, params: QueryParamsDto<AccountDto>) {
    const { data, items, pages } = await this.findAccountsByRoleUseCase.execute(
      {
        ...params,
        role,
      }
    );

    const accounts = plainToInstance(AccountDto, data);
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
