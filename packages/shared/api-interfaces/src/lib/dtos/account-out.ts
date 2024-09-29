import { Name } from '../interfaces';
import { AccountRole, Gender } from '../types';

export interface AccountOut {
  id: string;

  name: Name;

  username: string;

  email: string;

  gender?: Gender;

  photo?: string;

  minibio?: string;

  birthday?: string;

  roles: AccountRole;

  active: boolean;
}
