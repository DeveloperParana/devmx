import { input, Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { EventOut } from '@devmx/shared-api-interfaces';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { StateNamePipe } from '@devmx/shared-ui-global';
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
    MatIconModule,
    EventFormatPipe,
    IconComponent,
    StateNamePipe,
    DatePipe,
  ],
  standalone: true,
})
export class EventCardComponent {
  data = input.required<EventOut>();

  get event() {
    return this.data();
  }
}
