import { Name } from '../interfaces/name';
import { AccountRole } from '../types';
import { Gender } from '../types/gender';
import { City } from './city';

export interface Account {
  id: string;

  name: Name;

  username: string;

  password: string;

  email: string;

  roles: AccountRole;

  gender?: Gender;

  photo?: string;

  minibio?: string;

  birthday?: string;

  city?: City;

  active: boolean;
}
