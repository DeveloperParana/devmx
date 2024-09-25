import { AuthUser } from '@devmx/shared-api-interfaces';
import { ChangeRoles } from '../../lib/dtos';

export interface ChangeRolesBy {
  assign: ChangeRoles;
  assigner: AuthUser;
}
