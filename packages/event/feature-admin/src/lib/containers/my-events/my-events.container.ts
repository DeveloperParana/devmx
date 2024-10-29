import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { EventCardComponent } from '@devmx/event-ui-shared';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DialogFacade } from '@devmx/shared-ui-global/dialog';
import { EventFacade } from '@devmx/event-data-access';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { Event } from '@devmx/shared-api-interfaces';
import { AsyncPipe } from '@angular/common';
import { AuthFacade } from '@devmx/account-data-access';
import { combineLatest, filter, map } from 'rxjs';

@Component({
  selector: 'devmx-event-admin-my-events',
  templateUrl: './my-events.container.html',
  styleUrl: './my-events.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterModule,
    MatButtonModule,
    MatTooltipModule,
    EventCardComponent,
    PaginatorComponent,
    IconComponent,
    AsyncPipe,
  ],
  standalone: true,
})
export class MyEventsContainer {
  router = inject(Router);

  route = inject(ActivatedRoute);

  dialogFacade = inject(DialogFacade);

  authFacade = inject(AuthFacade);

  eventFacade = inject(EventFacade);

  constructor() {
    const user$ = this.authFacade.user$.pipe(
      filter((user) => !!user),
      map(({ id }) => id)
    );

    const params$ = this.route.queryParams.pipe(
      map(({ page, size, title, format, date }) => {
        return { page, size, title, format, date };
      })
    );

    combineLatest([user$, params$])
      .pipe(takeUntilDestroyed())
      .subscribe(this.onQueryParams);
  }

  onQueryParams = ([owner, params]: [string, Params]) => {
    const { page, size, title, format, date } = params;

    const filter = { title, format, date, owner };

    this.eventFacade.setParams({ page, size, filter });

    this.eventFacade.load();
  };

  deleteEvent({ id, title }: Event) {
    this.dialogFacade
      .confirm(
        `Confirme que deseja apagar a vaga ${title}`,
        `Esta ação não poderá ser desfeita`
      )
      .subscribe((confirmation) => {
        if (confirmation) {
          this.eventFacade.delete(id);
        }
      });
  }

  onPageChange({ page, size }: PageParams) {
    const queryParams = { page, size };
    this.router.navigate([], { queryParams });
  }
}
