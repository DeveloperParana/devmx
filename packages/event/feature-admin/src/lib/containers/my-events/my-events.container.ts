import { RouterModule, Router, ActivatedRoute, Params } from '@angular/router';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { CreateEventService, provideCreateEvent } from '../../dialogs';
import { SkeletonComponent } from '@devmx/shared-ui-global/skeleton';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { EventCardComponent } from '@devmx/event-ui-shared';
import { MatButtonModule } from '@angular/material/button';
import { AccountFacade } from '@devmx/account-data-access';
import { EventFacade } from '@devmx/event-data-access';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
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
  selector: 'devmx-my-events',
  templateUrl: './my-events.container.html',
  styleUrl: './my-events.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideCreateEvent()],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    IconComponent,
    EventCardComponent,
    PaginatorComponent,
    SkeletonComponent,
    IconComponent,
    RouterModule,
    AsyncPipe,
    DatePipe,
  ],
  standalone: true,
})
export class MyEventsContainer implements OnInit {
  router = inject(Router);

  route = inject(ActivatedRoute);

  destroyRef = inject(DestroyRef);

  eventFacade = inject(EventFacade);

  accountFacade = inject(AccountFacade);

  createEvent = inject(CreateEventService);

  ngOnInit() {
    const onQueryParams = (params: Params) => {
      const { title = '', format = '' } = params;
      this.accountFacade.setEventFilter({ title, format });

      const { page = 0, size = 10 } = params;
      this.accountFacade.loadEvents(page, size);
    };

    this.route.queryParams
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(onQueryParams);

    this.accountFacade.events$.subscribe(console.log);
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

  remove(id: string) {
    this.eventFacade.remove(id).subscribe(() => {
      this.accountFacade.loadEvents();
    });
  }

  onPageChange(queryParams: PageParams) {
    this.router.navigate([], { queryParams });
  }
}
