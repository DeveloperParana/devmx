import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { inject, Component, ChangeDetectionStrategy } from '@angular/core';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { SortDirectionComponent } from '@devmx/shared-ui-global/sort';
import { SkeletonComponent } from '@devmx/shared-ui-global/skeleton';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EventFacade } from '@devmx/event-data-access';
import { AsyncPipe } from '@angular/common';
import {
  DateRange,
  EventCardComponent,
  EventDateRangeComponent,
  EventFilterComponent,
  EventTimeComponent,
} from '@devmx/event-ui-shared';

@Component({
  selector: 'devmx-events',
  templateUrl: './events.container.html',
  styleUrl: './events.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    PaginatorComponent,
    EventTimeComponent,
    EventFilterComponent,
    EventDateRangeComponent,
    SortDirectionComponent,
    EventCardComponent,
    SkeletonComponent,
    RouterModule,
    AsyncPipe,
  ],
})
export class EventsContainer {
  router = inject(Router);

  route = inject(ActivatedRoute);

  eventFacade = inject(EventFacade);

  constructor() {
    this.route.queryParams
      .pipe(takeUntilDestroyed())
      .subscribe(this.onQueryParams);
  }

  onQueryParams = (params: Params) => {
    const { title = '', format = '', date = 'asc', time = '' } = params;

    const { page = 0, size = 10 } = params;

    const filter = { title, format };

    const { start, end } = params;

    const sort = { date };

    this.eventFacade.setParams({ page, size, filter, sort });

    if (start && end) {
      this.eventFacade.loadDateRange(new Date(start), new Date(end));
    } else if (time === 'until') {
      this.eventFacade.loadUntil();
    } else {
      this.eventFacade.load();
    }
  };

  onFilterChange(format: string) {
    const queryParams = this.mergeQueryParams({ format });
    this.router.navigate([], { queryParams });
  }

  onTimeChange(time: string) {
    const queryParams = { time };
    this.router.navigate([], { queryParams });
  }

  onRangeChange({ start, end }: DateRange) {
    const queryParams = this.mergeQueryParams({ start, end });
    this.router.navigate([], { queryParams });
  }

  onSortChange(date: string) {
    const queryParams = this.mergeQueryParams({ date });
    this.router.navigate([], { queryParams });
  }

  onPageChange(queryParams: PageParams) {
    this.router.navigate([], { queryParams });
  }

  mergeQueryParams(queryParams: object) {
    return { ...this.route.snapshot.queryParams, ...queryParams };
  }
}
