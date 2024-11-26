import { EntityService } from '@devmx/shared-api-interfaces/server';
import {
  Roles,
  User,
  UserCode,
  UserPassword,
  UserProfile,
  UserSocial,
} from '@devmx/shared-api-interfaces';

export abstract class UsersService extends EntityService<User> {
  abstract findByName(name: string): Promise<User | null>;

  abstract updateCode(id: string, code: UserCode): Promise<User | null>;

  abstract updatePassword(
    id: string,
    password: UserPassword
  ): Promise<User | null>;

  abstract updateProfile(
    id: string,
    profile: UserProfile
  ): Promise<User | null>;

  abstract updateSocial(id: string, social: UserSocial[]): Promise<User | null>;

  abstract updateRoles(id: string, roles: Roles): Promise<User | null>;
}
