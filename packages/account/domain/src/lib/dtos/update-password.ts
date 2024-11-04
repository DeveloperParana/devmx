import { ValidateUserCode } from './validate-user-code';

export interface UpdatePassword extends ValidateUserCode {
  id: string;

  password: string;
}
