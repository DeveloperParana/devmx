import { CoverResult, SelectCoverDialog } from './select-cover.dialog';
import { Dialog } from '@angular/cdk/dialog';
import { take } from 'rxjs';

export class SelectCover {
  constructor(private dialog: Dialog) {}

  open(data: Blob) {
    return this.dialog
      .open<CoverResult, Blob>(SelectCoverDialog, { data })
      .closed.pipe(take(1));
  }
}
