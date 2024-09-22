import { Name } from './name';

export interface AccessTokenPayload {
  sub: string;
  name: Name;
  email: string;
  username: string;
  photo: string;
  iat: number
}
