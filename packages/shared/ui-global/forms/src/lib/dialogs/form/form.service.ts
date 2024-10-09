import { MatDialog } from '@angular/material/dialog';
import { FormDialog, FormDialogData } from './form.dialog';

export class FormService {
  constructor(private dialog: MatDialog) {}

  open<T>(data: FormDialogData<T>) {
    return this.dialog.open<FormDialog<T>, FormDialogData<T>, T>(
      FormDialog<T>,
      { data }
    );
  }
}
