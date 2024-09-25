import { AccountRole, Role } from '@devmx/shared-api-interfaces';

export type RoleKey = 'sponsor' | 'worthy' | 'board';

const roleKeys: Record<RoleKey, Role[]> = {
  sponsor: ['donor', 'neighbor'],
  worthy: ['leader', 'staff', 'fellow'],
  board: ['director', 'manager'],
};

export function hasRole(key: RoleKey, account: AccountRole) {
  return roleKeys[key].some((role) => account[role]);
}
