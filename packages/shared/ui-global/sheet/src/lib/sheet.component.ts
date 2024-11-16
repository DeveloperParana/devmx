import { Directive, inject } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';

@Directive()
export class SheetComponent<R, C, D> {
  ref = inject<MatBottomSheetRef<C, R>>(MatBottomSheetRef);

  data = inject<D>(MAT_BOTTOM_SHEET_DATA);

  close(result?: R) {
    this.ref.dismiss(result);
  }
}
