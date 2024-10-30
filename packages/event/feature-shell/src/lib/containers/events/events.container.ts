import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { inject, Component, ChangeDetectionStrategy } from '@angular/core';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { SkeletonComponent } from '@devmx/shared-ui-global/skeleton';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EventFacade } from '@devmx/event-data-access';
import { AsyncPipe } from '@angular/common';
import {
  EventCardComponent,
  EventFilterComponent,
} from '@devmx/event-ui-shared';

@Component({
  selector: 'devmx-events',
  templateUrl: './events.container.html',
  styleUrl: './events.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    PaginatorComponent,
    EventFilterComponent,
    EventCardComponent,
    SkeletonComponent,
    RouterModule,
    AsyncPipe,
  ],
  standalone: true,
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
    const { title = '', format = '' } = params;

    const { page = 0, size = 10 } = params;

    const filter = { title, format };

    this.eventFacade.setParams({ page, size, filter });

    this.eventFacade.load();
  };

  onFilterChange(format: string) {
    const queryParams = { format };
    this.router.navigate([], { queryParams });
  }

  onPageChange(queryParams: PageParams) {
    this.router.navigate([], { queryParams });
  }
}
