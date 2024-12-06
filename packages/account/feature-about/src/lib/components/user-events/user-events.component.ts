import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Event } from '@devmx/shared-api-interfaces';

@Component({
  selector: 'devmx-user-events',
  template: `
    <ul>
      @for (item of data(); track item.id) {
      <li>{{ item.title }}</li>
      }
    </ul>
  `,
  styleUrl: './user-events.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEventsComponent {
  data = input.required<Event[]>();
}
