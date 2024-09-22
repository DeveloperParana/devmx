import { Name } from './name';

export interface AuthUser {
  id: string;
  name: Name;
  email: string;
  username: string;
  photo: string;
}
