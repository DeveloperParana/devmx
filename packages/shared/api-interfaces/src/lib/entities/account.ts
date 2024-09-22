import { Name } from '../interfaces/name';
import { Gender } from '../types/gender';

export interface Account {
  id: string;

  name: Name;

  username: string;

  password: string;

  email: string;

  gender?: Gender;

  photo?: string;

  minibio?: string;

  birthday?: string;

  active: boolean;
}
