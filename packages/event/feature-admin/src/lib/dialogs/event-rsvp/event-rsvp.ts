import { EventRSVPDialog } from './event-rsvp.dialog';
import { MatDialog } from '@angular/material/dialog';
import { RSVP } from '@devmx/shared-api-interfaces';
import { take } from 'rxjs';

export class EventRSVP {
  constructor(private dialog: MatDialog) {}

  open(data: RSVP[]) {
    return this.dialog
      .open<EventRSVPDialog, RSVP[], void>(EventRSVPDialog, {
        data,
      })
      .afterClosed()
      .pipe(take(1));
  }
}
