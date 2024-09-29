import { AccountOut, AuthUser } from '@devmx/shared-api-interfaces';

export interface ChangeRolesOptions {
  assign: AccountOut;
  assigner: AuthUser;
}
