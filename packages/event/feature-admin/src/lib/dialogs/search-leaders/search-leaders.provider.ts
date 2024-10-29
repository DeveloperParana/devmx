import { MatDialog } from '@angular/material/dialog';
import { SearchLeaders } from './search-leaders';

export function provideSearchLeaders() {
  return {
    provide: SearchLeaders,
    deps: [MatDialog],
  };
}
