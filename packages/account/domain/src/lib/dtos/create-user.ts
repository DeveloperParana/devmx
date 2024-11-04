import { AutoAssignableRoles } from '@devmx/shared-api-interfaces';

export interface CreateUser {
  name: string;

  displayName: string;

  // password: string;
  roles: AutoAssignableRoles;

  email: string;

  phone?: string;
}
