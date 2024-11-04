import { EditableUser, Role } from '@devmx/shared-api-interfaces';
import { MatDialog } from '@angular/material/dialog';
import { Observable, take } from 'rxjs';
import {
  SelectUserConfig,
  SelectUserDialog,
} from './select-user.dialog';

export class SelectUser {
  constructor(private dialog: MatDialog) {}

  open(data?: {
    multiple?: true;
    onlyRole?: Role;
  }): Observable<EditableUser[]>;
  open(data?: {
    multiple?: false;
    onlyRole?: Role;
  }): Observable<EditableUser>;
  open(data: SelectUserConfig = {}) {
    return this.dialog
      .open(SelectUserDialog, { data })
      .afterClosed()
      .pipe(take(1));
  }
}
