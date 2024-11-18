import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { EventPage } from '@devmx/shared-api-interfaces';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { eachMinuteOfInterval, interval } from 'date-fns';
import { EventScheduleSettingsForm } from '../../forms';

type EventScheduleRef = MatDialogRef<EventScheduleSettingsDialog>;

@Component({
  selector: 'devmx-event-schedule-settings',
  templateUrl: './event-schedule-settings.dialog.html',
  styleUrl: './event-schedule-settings.dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
  ],
  standalone: true,
})
export class EventScheduleSettingsDialog {
  ref = inject<EventScheduleRef>(MatDialogRef);

  data = inject<EventPage>(MAT_DIALOG_DATA);

  // form = new EventScheduleSettingsForm()

  constructor() {
    const { start, end } = this.data;

    interval(start, end, {});
  }

  buildGrid(step: number) {
    return eachMinuteOfInterval(this.data, { step });
  }
}
