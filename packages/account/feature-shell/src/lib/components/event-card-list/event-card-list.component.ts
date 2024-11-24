import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { Event } from '@devmx/shared-api-interfaces';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'devmx-event-card-list',
  templateUrl: './event-card-list.component.html',
  styleUrl: './event-card-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatCardModule, MatListModule, IconComponent, DatePipe, RouterLink],
  standalone: true,
})
export class EventCardListComponent {
  data = input<Event[]>([]);
}
