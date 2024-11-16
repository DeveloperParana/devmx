import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ComponentType } from '@angular/cdk/portal';
import { Observable } from 'rxjs';

export class SheetFacade {
  constructor(private sheet: MatBottomSheet) {}

  open<C, D, R>(component: ComponentType<C>, data?: D): Observable<R | void> {
    return this.sheet
      .open<C, D, R>(component, {
        data,
        autoFocus: true,
        restoreFocus: true,
        panelClass: 'devmx-sheet',
      })
      .afterDismissed();
  }
}
