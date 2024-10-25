import { ConfirmDialogComponent, ConfirmDialogData } from './confirm-dialog';
import { Dialog } from '@angular/cdk/dialog';
import { take } from 'rxjs';

export class DialogFacade {
  constructor(private dialog: Dialog) {}

  confirm(...message: string[]) {
    const title = `Muita calma!`;

    const data = { title, message };

    const panelClass = 'devmx-confirm-dialog';

    const disableClose = true;

    return this.dialog
      .open<boolean, ConfirmDialogData, ConfirmDialogComponent>(
        ConfirmDialogComponent,
        { data, panelClass, disableClose }
      )
      .closed.pipe(take(1));
  }
}
