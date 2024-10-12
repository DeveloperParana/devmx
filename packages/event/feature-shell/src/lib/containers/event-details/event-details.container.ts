import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PhotoPipe, StateNamePipe } from '@devmx/shared-ui-global';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { EventOut } from '@devmx/shared-api-interfaces';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AsyncPipe, DatePipe } from '@angular/common';
import { EventFormatPipe } from '../../pipes';
import { filter, map } from 'rxjs';

@Component({
  selector: 'devmx-event-details',
  templateUrl: './event-defails.container.html',
  styleUrl: './event-defails.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    IconComponent,
    EventFormatPipe,
    StateNamePipe,
    PhotoPipe,
    AsyncPipe,
    DatePipe,
  ],
  standalone: true,
})
export class EventDetailsContainer {
  route = inject(ActivatedRoute);

  event$ = this.route.data.pipe(
    filter((data) => 'event' in data),
    map((data) => data['event'] as EventOut)
  );
}
