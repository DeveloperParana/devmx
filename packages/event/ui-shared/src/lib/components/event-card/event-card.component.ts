import { input, Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { Event } from '@devmx/shared-api-interfaces';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { EventFormatPipe } from '../../pipes';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'devmx-event-card',
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatCardModule,
    MatListModule,
    EventFormatPipe,
    IconComponent,
    DatePipe,
  ],
})
export class EventCardComponent {
  data = input.required<Event>();

  get event() {
    return this.data();
  }
}
