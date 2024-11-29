import { Roles } from '../types';
import { UserCode } from './user-code';
import { UserContact } from './user-contact';
import { UserPassword } from './user-password';
import { UserProfile } from './user-profile';
import { UserSkill } from './user-skill';
import { UserSocial } from './user-social';

export interface User {
  id: string;

  name: string;

  displayName: string;

  active: boolean;

  roles: Roles;

  skills?: UserSkill[];

  contact: UserContact;

  code?: UserCode;

  password?: UserPassword;

  profile?: UserProfile;

  social?: UserSocial[];
}
