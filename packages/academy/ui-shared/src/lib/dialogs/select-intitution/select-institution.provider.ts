import { SelectInstitution } from './select-institution';
import { MatDialog } from '@angular/material/dialog';

export function provideSelectInstitution() {
  return {
    provide: SelectInstitution,
    deps: [MatDialog],
  };
}
