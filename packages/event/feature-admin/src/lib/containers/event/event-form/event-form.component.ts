import { DateTimePickerComponent } from '@devmx/shared-ui-global/datetime';
import { inject, Component, ChangeDetectionStrategy } from '@angular/core';
import { ControlContainer, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { EventForm } from '../../../forms';

@Component({
  selector: 'devmx-admin-event-form',
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    DateTimePickerComponent,
  ],
  standalone: true,
})
export class EventFormComponent {
  container = inject(ControlContainer);

  get form() {
    return this.container.control as EventForm;
  }
}
