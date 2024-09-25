import { AccountRole } from '../types';
import { Name } from './name';

export interface AuthUser {
  id: string;
  name: Name;
  email: string;
  username: string;
  roles: AccountRole;
  photo: string;
}
