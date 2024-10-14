import { SearchPresentationsService } from './search-presentations.service';
import { MatDialog } from '@angular/material/dialog';

export function provideSearchPresentations() {
  return {
    provide: SearchPresentationsService,
    deps: [MatDialog],
  };
}
