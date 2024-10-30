import { AccountRole } from '@devmx/shared-api-interfaces';

export function authIsAdmin(roles: AccountRole) {
  return roles.director || roles.manager || roles.staff;
}
