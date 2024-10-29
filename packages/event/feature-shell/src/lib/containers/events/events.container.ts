import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { SkeletonComponent } from '@devmx/shared-ui-global/skeleton';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LayoutFacade } from '@devmx/shared-ui-global/layout';
import { EventCardComponent } from '@devmx/event-ui-shared';
import { AuthFacade } from '@devmx/account-data-access';
import { EventFilterComponent } from '../../components';
import { EventFacade } from '@devmx/event-data-access';
import { AsyncPipe } from '@angular/common';
import {
  inject,
  Component,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-events',
  templateUrl: './events.container.html',
  styleUrl: './events.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    PaginatorComponent,
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

  destroyRef = inject(DestroyRef);

  layoutFacade = inject(LayoutFacade);

  authFacade = inject(AuthFacade);

  eventFacade = inject(EventFacade);

  constructor() {
    this.route.queryParams
      .pipe(takeUntilDestroyed())
      .subscribe(this.onQueryParams);

    this.layoutFacade.setComponent(EventFilterComponent);
    this.layoutFacade.setSidenav({ start: true });

    this.destroyRef.onDestroy(() => {
      this.layoutFacade.resetComponent();
    });
  }

  onQueryParams = (params: Params) => {
    const { title = '', format = '' } = params;

    const { page = 0, size = 10 } = params;

    const filter = { title, format };

    this.eventFacade.setParams({ page, size, filter });

    this.eventFacade.load();
  };

  onPageChange(queryParams: PageParams) {
    this.router.navigate([], { queryParams });
  }
}
