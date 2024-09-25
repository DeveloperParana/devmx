import { AccountRole } from '@devmx/shared-api-interfaces';

export interface ChangeRoles {
  id: string;
  username?: string;
  currentRoles: AccountRole;
  newRoles: AccountRole;
}
