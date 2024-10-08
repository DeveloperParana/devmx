import { AuthUser } from '@devmx/shared-api-interfaces';
import { ChangeRoles } from './change-roles';

export interface ChangeRolesBy {
  assign: ChangeRoles;
  assigner: AuthUser;
}
