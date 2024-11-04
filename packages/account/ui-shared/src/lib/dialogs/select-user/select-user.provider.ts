import { MatDialog } from '@angular/material/dialog';
import { SelectUser } from './select-user';

export function provideSelectUser() {
  return {
    provide: SelectUser,
    deps: [MatDialog],
  };
}
