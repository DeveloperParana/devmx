import { EditableInstitution } from '@devmx/shared-api-interfaces';
import { MatDialog } from '@angular/material/dialog';
import { Observable, take } from 'rxjs';
import {
  SelectInstitutionConfig,
  SelectInstitutionDialog,
} from './select-institution.dialog';

export class SelectInstitution {
  constructor(private dialog: MatDialog) {}

  open(data?: { multiple?: true }): Observable<EditableInstitution[]>;
  open(data?: { multiple?: false }): Observable<EditableInstitution>;
  open(data: SelectInstitutionConfig = {}) {
    return this.dialog
      .open(SelectInstitutionDialog, { data })
      .afterClosed()
      .pipe(take(1));
  }
}
