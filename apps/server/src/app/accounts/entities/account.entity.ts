import { Name, Gender } from '../../shared';

export class AccountEntity {
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
