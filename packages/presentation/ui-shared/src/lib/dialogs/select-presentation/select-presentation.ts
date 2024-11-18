import { EditablePresentation } from '@devmx/shared-api-interfaces';
import { MatDialog } from '@angular/material/dialog';
import { Observable, take } from 'rxjs';
import {
  SelectPresentationConfig,
  SelectPresentationDialog,
} from './select-presentation.dialog';

export class SelectPresentation {
  constructor(private dialog: MatDialog) {}

  open(data?: { multiple?: true }): Observable<EditablePresentation[]>;
  open(data?: { multiple?: false }): Observable<EditablePresentation>;
  open(data: SelectPresentationConfig = {}) {
    return this.dialog
      .open(SelectPresentationDialog, { data })
      .afterClosed()
      .pipe(take(1));
  }
}
