import { ChangeRolesService } from './change-roles.service';
import { MatDialog } from '@angular/material/dialog';

export function provideChangeRoles() {
  return {
    provide: ChangeRolesService,
    deps: [MatDialog],
  };
}
