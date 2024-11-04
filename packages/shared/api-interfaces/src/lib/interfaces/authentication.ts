import { UserContact } from '../entities';
import { Roles } from '../types';

export interface Authentication {
  id: string;
  name: string;
  displayName: string;
  contact: UserContact;
  roles: Roles;
}
