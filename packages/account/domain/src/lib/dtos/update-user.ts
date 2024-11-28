import {
  EditableUser,
  UserContact,
  UserProfile,
  UserSocial,
} from '@devmx/shared-api-interfaces';

export interface UpdateUser extends EditableUser {
  id: string;

  name: string;

  displayName: string;

  active: boolean;

  profile: UserProfile;
  contact: UserContact;

  social: UserSocial[];
}
