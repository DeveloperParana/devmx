import { SelectCoverDialog } from './select-cover.dialog';
import { MatDialog } from '@angular/material/dialog';
import { SelectCoverOptions } from './select-cover.options';

export class SelectCoverService {
  constructor(private dialog: MatDialog) {}

  open(data: SelectCoverOptions = { width: 1920, height: 600 }) {
    return this.dialog.open<SelectCoverDialog, SelectCoverOptions, Blob>(
      SelectCoverDialog,
      { data }
    );
  }
}
