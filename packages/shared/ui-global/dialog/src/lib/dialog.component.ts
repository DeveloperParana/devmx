import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Directive, inject } from '@angular/core';
import { FocusOrigin } from '@angular/cdk/a11y';

@Directive()
export class DialogComponent<R, C, D> {
  ref = inject<DialogRef<R, C>>(DialogRef);

  data = inject<D>(DIALOG_DATA);

  close(returnValue?: R, focusOrigin?: FocusOrigin) {
    this.ref.close(returnValue, { focusOrigin });
  }
}
