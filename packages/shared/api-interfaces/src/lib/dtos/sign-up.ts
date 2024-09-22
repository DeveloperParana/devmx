import { Name } from '../interfaces';
import { Gender } from '../types';

export interface SignUp {
  name: Name;

  username: string;

  password: string;

  email: string;

  gender?: Gender;

  photo?: string;

  minibio?: string;

  birthday?: string;
}
