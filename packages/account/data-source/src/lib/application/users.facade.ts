import { User } from '@devmx/shared-api-interfaces';
import { plainToInstance } from 'class-transformer';
import {
  UpdateProfileUseCase,
  UpdateSocialUseCase,
  UpdatePasswordUseCase,
  FindUsersUseCase,
  FindUserByIDUseCase,
  DeleteUserUseCase,
  UpdateRolesUseCase,
  FindUserByNameUseCase,
  UpdateUserUseCase,
} from '@devmx/account-domain/server';
import {
  UserDto,
  UpdateSocialDto,
  UpdateProfileDto,
  UpdatePasswordDto,
  UpdateRolesDto,
  UpdateUserDto,
} from '../dtos';
import {
  PageDto,
  QueryParamsDto,
  createServerProvider,
} from '@devmx/shared-data-source';

export class UsersFacade {
  constructor(
    private findUsersUseCase: FindUsersUseCase,
    private findUserByIDUseCase: FindUserByIDUseCase,
    private deleteUserUseCase: DeleteUserUseCase,
    private updateProfileUseCase: UpdateProfileUseCase,
    private updateUserUseCase: UpdateUserUseCase,
    private updateSocialUseCase: UpdateSocialUseCase,
    private updatePasswordUseCase: UpdatePasswordUseCase,
    private updateRolesUseCase: UpdateRolesUseCase,
    private findUserByNameUseCase: FindUserByNameUseCase
  ) {}

  async find(params: QueryParamsDto<User>) {
    const { data, items, pages } = await this.findUsersUseCase.execute(params);
    const users = plainToInstance(UserDto, data);
    return new PageDto(users, items, pages);
  }

  async findOne(id: string) {
    const user = await this.findUserByIDUseCase.execute(id);
    return plainToInstance(UserDto, user);
  }

  async findOneByName(name: string) {
    const user = await this.findUserByNameUseCase.execute(name);
    return plainToInstance(UserDto, user);
  }

  async update(data: UpdateUserDto) {
    return await this.updateUserUseCase.execute(data);
  }

  async updateProfile(data: UpdateProfileDto) {
    return await this.updateProfileUseCase.execute(data);
  }

  async updateSocial(data: UpdateSocialDto) {
    return await this.updateSocialUseCase.execute(data);
  }

  async updatePassword(data: UpdatePasswordDto) {
    return await this.updatePasswordUseCase.execute(data);
  }

  async updateRoles(data: UpdateRolesDto) {
    return await this.updateRolesUseCase.execute(data);
  }

  async delete(id: string) {
    return await this.deleteUserUseCase.execute(id);
  }
}

export function provideUsersFacade() {
  return createServerProvider(UsersFacade, [
    FindUsersUseCase,
    FindUserByIDUseCase,
    DeleteUserUseCase,
    UpdateProfileUseCase,
    UpdateUserUseCase,
    UpdateSocialUseCase,
    UpdatePasswordUseCase,
    UpdateRolesUseCase,
    FindUserByNameUseCase,
  ]);
}
