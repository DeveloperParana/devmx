import { SearchPresentations } from './search-presentations';
import { MatDialog } from '@angular/material/dialog';

export function provideSearchPresentations() {
  return {
    provide: SearchPresentations,
    deps: [MatDialog],
  };
}
