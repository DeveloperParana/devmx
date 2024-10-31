import { EditableAccount, Role } from '@devmx/shared-api-interfaces';
import { MatDialog } from '@angular/material/dialog';
import { Observable, take } from 'rxjs';
import {
  SelectAccountConfig,
  SelectAccountDialog,
} from './select-account.dialog';

export class SelectAccount {
  constructor(private dialog: MatDialog) {}

  open(data?: {
    multiple?: true;
    onlyRole?: Role;
  }): Observable<EditableAccount[]>;
  open(data?: {
    multiple?: false;
    onlyRole?: Role;
  }): Observable<EditableAccount>;
  open(data: SelectAccountConfig = {}) {
    return this.dialog
      .open(SelectAccountDialog, { data })
      .afterClosed()
      .pipe(take(1));
  }
}
