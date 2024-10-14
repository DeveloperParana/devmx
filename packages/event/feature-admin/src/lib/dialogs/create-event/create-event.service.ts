import { CreateEvent } from '@devmx/shared-api-interfaces';
import { CreateEventDialog } from './create-event.dialog';
import { MatDialog } from '@angular/material/dialog';

export class CreateEventService {
  constructor(private dialog: MatDialog) {}

  open() {
    return this.dialog.open<CreateEventDialog, void, CreateEvent>(
      CreateEventDialog
    );
  }
}
