import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { RouterModule, Router, ActivatedRoute, Params } from '@angular/router';
import { CreateEventService, provideCreateEvent } from '../../dialogs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { AccountFacade } from '@devmx/account-data-access';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { EventFacade, FilterEvent } from '@devmx/event-data-access';
import { AsyncPipe, DatePipe } from '@angular/common';
import { take } from 'rxjs';
import {
  inject,
  OnInit,
  Component,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-events',
  templateUrl: './events.container.html',
  styleUrl: './events.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideCreateEvent()],
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    PaginatorComponent,
    RouterModule,
    AsyncPipe,
    DatePipe,
  ],
  standalone: true,
})
export class EventsContainer implements OnInit {
  router = inject(Router);

  route = inject(ActivatedRoute);

  destroyRef = inject(DestroyRef);

  eventFacade = inject(EventFacade);

  accountFacade = inject(AccountFacade);

  createEvent = inject(CreateEventService);

  ngOnInit() {
    const onQueryParams = (params: Params) => {
      const { title = '', format = '' } = params;
      this.eventFacade.setFilter({ title, format });

      const { page = 0, size = 10 } = params;
      this.eventFacade.load(page, size);
    };

    this.route.queryParams
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(onQueryParams);
  }

  openCreate() {
    const createEventRef = this.createEvent.open();
    const afterClosed$ = createEventRef.afterClosed().pipe(take(1));
    afterClosed$.subscribe((event) => {
      if (event) {
        const event$ = this.eventFacade.event$;
        event$.pipe(take(1)).subscribe(() => {
          this.accountFacade.loadEvents();
        });
        this.eventFacade.create(event);
      }
    });
  }

  onFilterChange(queryParams: FilterEvent) {
    this.router.navigate([], { queryParams });
  }

  onPageChange(queryParams: PageParams) {
    this.router.navigate([], { queryParams });
  }
}
