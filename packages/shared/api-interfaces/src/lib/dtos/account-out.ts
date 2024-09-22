import { Name } from '../interfaces';
import { Gender } from '../types';

export interface AccountOut {
  id: string;

  name: Name;

  username: string;

  email: string;

  gender?: Gender;

  photo?: string;

  minibio?: string;

  birthday?: string;

  active: boolean;
}
