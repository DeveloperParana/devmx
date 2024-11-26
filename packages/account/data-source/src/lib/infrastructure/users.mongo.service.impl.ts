import { createServiceProvider, MongoService } from '@devmx/shared-data-source';
import { UsersService } from '@devmx/account-domain/server';
import { getModelToken } from '@nestjs/mongoose';
import { UserCollection } from '../schemas';
import {
  Roles,
  UserCode,
  UserPassword,
  UserProfile,
  UserSocial,
} from '@devmx/shared-api-interfaces';

export class UsersMongoServiceImpl
  extends MongoService<UserCollection>
  implements UsersService
{
  async findByName(value: string) {
    const name = new RegExp(value);
    const entity = await this.entityModel.findOne({ name }).exec();
    return entity ? (entity.toJSON() as UserCollection) : null;
  }

  async updateCode(id: string, code: UserCode) {
    const updated = await this.entityModel
      .findByIdAndUpdate(id, { code })
      .exec();

    return updated ? updated.toJSON() : null;
  }

  async updatePassword(id: string, password: UserPassword) {
    const updated = await this.entityModel
      .findByIdAndUpdate(id, { password })
      .exec();

    return updated ? updated.toJSON() : null;
  }

  async updateProfile(id: string, profile: UserProfile) {
    const updated = await this.entityModel.findByIdAndUpdate(id, { profile });

    return updated ? updated.toJSON() : null;
  }

  async updateSocial(id: string, social: UserSocial[]) {
    const updated = await this.entityModel.findByIdAndUpdate(id, { social });

    return updated ? updated.toJSON() : null;
  }

  async updateRoles(id: string, roles: Roles) {
    const updated = await this.entityModel.findByIdAndUpdate(id, { roles });

    return updated ? updated.toJSON() : null;
  }
}

export function provideUsersMongoService() {
  return createServiceProvider(UsersService, UsersMongoServiceImpl, [
    getModelToken(UserCollection.name),
  ]);
}
