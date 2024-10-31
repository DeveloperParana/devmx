import { MatDialog } from '@angular/material/dialog';
import { SelectAccount } from './select-account';

export function provideSelectAccount() {
  return {
    provide: SelectAccount,
    deps: [MatDialog],
  };
}
