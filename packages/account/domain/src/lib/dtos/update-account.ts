import { AccountRole, Gender, Name } from '@devmx/shared-api-interfaces';

export interface UpdateAccount {
  id: string;

  name?: Name;

  username?: string;

  email?: string;

  gender?: Gender;

  photo?: string;

  minibio?: string;

  birthday?: string;

  city?: string;

  roles?: AccountRole;

  password?: string;

  active?: boolean;
}
