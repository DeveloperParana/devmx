import { SelectCoverService } from './select-cover.service';
import { MatDialog } from '@angular/material/dialog';

export function provideSelectCover() {
  return {
    provide: SelectCoverService,
    deps: [MatDialog],
  };
}
