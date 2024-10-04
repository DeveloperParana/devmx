import { CreateEventService } from './create-event.service';
import { MatDialog } from '@angular/material/dialog';

export function provideCreateEvent() {
  return {
    provide: CreateEventService,
    deps: [MatDialog],
  };
}
