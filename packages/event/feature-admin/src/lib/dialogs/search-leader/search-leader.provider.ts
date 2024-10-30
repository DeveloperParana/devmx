import { MatDialog } from '@angular/material/dialog';
import { SearchLeader } from './search-leader';

export function provideSearchLeader() {
  return {
    provide: SearchLeader,
    deps: [MatDialog],
  };
}
