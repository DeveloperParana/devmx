import { Gender, Name } from '@devmx/shared-api-interfaces';

export interface UpdateAccount {
  id: string;

  name?: Name;

  username?: string;

  email?: string;

  gender?: Gender;

  photo?: string;

  minibio?: string;

  birthday?: string;

  active?: boolean;
}
