import { SearchLeadersService } from './search-leaders.service';
import { MatDialog } from '@angular/material/dialog';

export function provideSearchLeaders() {
  return {
    provide: SearchLeadersService,
    deps: [MatDialog],
  };
}
