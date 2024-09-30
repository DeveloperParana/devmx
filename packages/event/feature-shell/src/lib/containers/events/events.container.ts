import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { EventFacade, FilterEvent } from '@devmx/event-data-access';
import { MatButtonModule } from '@angular/material/button';
import { FilterEventComponent } from '../../components';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { AsyncPipe, DatePipe } from '@angular/common';
import {
  inject,
  OnInit,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-events',
  templateUrl: './events.container.html',
  styleUrl: './events.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    FilterEventComponent,
    RouterLink,
    AsyncPipe,
    DatePipe
  ],
  standalone: true,
})
export class EventsContainer implements OnInit {
  eventFacade = inject(EventFacade);

  ngOnInit() {
    this.eventFacade.load();
  }

  find(filter: FilterEvent) {
    this.eventFacade.setFilter(filter);
    this.eventFacade.load();
  }

  onPageChange(event: PageEvent) {
    this.eventFacade.load(event.pageIndex, event.pageSize);
  }
}
