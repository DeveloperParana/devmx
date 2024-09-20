import { Name } from '../../shared/types/name';

export interface AccessTokenPayload {
  sub: string;
  name: Name;
  email: string;
  username: string;
  photo: string;
}
