import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { RSVPByStatusPipe } from '@devmx/event-ui-shared';
import { MatListModule } from '@angular/material/list';
import { PhotoPipe } from '@devmx/shared-ui-global';
import { RSVP } from '@devmx/shared-api-interfaces';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'devmx-event-rsvp',
  templateUrl: './event-rsvp.dialog.html',
  styleUrl: './event-rsvp.dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatDialogTitle,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
    MatListModule,
    IconComponent,
    RSVPByStatusPipe,
  ],
})
export class EventRSVPDialog {
  ref = inject<MatDialogRef<EventRSVPDialog, void>>(MatDialogRef);

  data = inject<RSVP[]>(MAT_DIALOG_DATA);
}
