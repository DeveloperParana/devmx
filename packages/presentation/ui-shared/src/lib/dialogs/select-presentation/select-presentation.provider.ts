import { SelectPresentation } from './select-presentation';
import { MatDialog } from '@angular/material/dialog';

export function provideSelectPresentation() {
  return {
    provide: SelectPresentation,
    deps: [MatDialog],
  };
}
