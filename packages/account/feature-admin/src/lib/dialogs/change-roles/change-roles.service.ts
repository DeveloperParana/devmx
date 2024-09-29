import { ChangeRolesOptions } from './change-roles-options';
import { ChangeRolesDialog } from './change-roles.dialog';
import { ChangeRoles } from '@devmx/account-data-access';
import { MatDialog } from '@angular/material/dialog';

export class ChangeRolesService {
  constructor(private dialog: MatDialog) {}

  open(data: ChangeRolesOptions) {
    return this.dialog.open<ChangeRolesDialog, ChangeRolesOptions, ChangeRoles>(
      ChangeRolesDialog,
      { data }
    );
  }
}
