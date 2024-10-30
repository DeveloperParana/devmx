import { MatDialog } from '@angular/material/dialog';
import { EventRSVP } from './event-rsvp';

export function provideEventRSVP() {
  return {
    provide: EventRSVP,
    deps: [MatDialog],
  };
}
