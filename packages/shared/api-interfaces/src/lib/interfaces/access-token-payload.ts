import { AccountRole } from '../types';
import { AuthCity } from './auth-user';
import { Name } from './name';

export interface AccessTokenPayload {
  sub: string;
  name: Name;
  email: string;
  username: string;
  photo: string;
  roles: AccountRole;
  city?: AuthCity;
  iat: number;
}
