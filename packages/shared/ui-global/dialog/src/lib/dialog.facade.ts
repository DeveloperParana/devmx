import { ConfirmDialogComponent, ConfirmDialogData } from './confirm-dialog';
import { PromptDialogComponent, PromptDialogData } from './prompt-dialog';
import { ReadMeDialogComponent } from './read-me-dialog';
import { Dialog } from '@angular/cdk/dialog';
import { from, switchMap, take } from 'rxjs';

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

  prompt(label: string, value?: string, required?: boolean) {
    const title = `Antes de continuar`;

    const data = { title, label, value, required };

    const panelClass = 'devmx-prompt-dialog';

    return this.dialog
      .open<string, PromptDialogData, PromptDialogComponent>(
        PromptDialogComponent,
        { data, panelClass }
      )
      .closed.pipe(take(1));
  }

  readMe(url: string) {
    const panelClass = 'devmx-read-me-dialog';

    const disableClose = true;

    return from(fetch(url).then((result) => result.text())).pipe(
      switchMap((data) => {
        const config = { data, panelClass, disableClose };

        return this.dialog
          .open<boolean, string>(ReadMeDialogComponent, config)
          .closed.pipe(take(1));
      })
    );
  }
}
