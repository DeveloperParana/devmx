import { inject, Component, ChangeDetectionStrategy } from '@angular/core';
import { ControlContainer, ReactiveFormsModule } from '@angular/forms';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { EventForm } from '../../../forms';

@Component({
  selector: 'devmx-admin-event-presentations',
  templateUrl: './event-presentations.component.html',
  styleUrl: './event-presentations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
  imports: [ReactiveFormsModule, MatListModule, MatButtonModule, IconComponent],
  standalone: true,
})
export class EventPresentationsComponent {
  container = inject(ControlContainer);

  get form() {
    return this.container.control as EventForm;
  }
}
