import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SheetFacade } from './sheet.facade';

export function provideSheet() {
  return {
    provide: SheetFacade,
    deps: [MatBottomSheet],
  };
}
