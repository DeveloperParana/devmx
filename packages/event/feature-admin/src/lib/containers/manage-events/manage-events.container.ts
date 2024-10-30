import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { BehaviorSubject, combineLatest, filter, map, skip, take } from 'rxjs';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { EventFacade, RSVPFacade } from '@devmx/event-data-access';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DialogFacade } from '@devmx/shared-ui-global/dialog';
import { AccountRef, Event } from '@devmx/shared-api-interfaces';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { EventCardComponent } from '@devmx/event-ui-shared';
import { MatButtonModule } from '@angular/material/button';
import { AsyncPipe } from '@angular/common';
import { EventRSVP, SearchLeader } from '../../dialogs';

@Component({
  selector: 'devmx-event-admin-manage-events',
  templateUrl: './manage-events.container.html',
  styleUrl: './manage-events.container.scss',
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
export class ManageEventsContainer {
  router = inject(Router);

  route = inject(ActivatedRoute);

  dialogFacade = inject(DialogFacade);

  eventFacade = inject(EventFacade);

  rsvpFacade = inject(RSVPFacade);

  eventRSVP = inject(EventRSVP);

  searchLeader = inject(SearchLeader);

  #accountRef = new BehaviorSubject<AccountRef | null>(null);
  accountRef$ = this.#accountRef.asObservable();

  constructor() {
    const user$ = this.accountRef$.pipe(map((user) => (user ? user.id : '')));

    const params$ = this.route.queryParams.pipe(
      map(({ page, size, title, format, date }) => {
        return { page, size, title, format, date };
      })
    );

    combineLatest([user$, params$])
      .pipe(takeUntilDestroyed())
      .subscribe(this.onQueryParams);
  }

  setAccountRef(accountRef: AccountRef | null = null) {
    this.#accountRef.next(accountRef);
  }

  onQueryParams = ([owner, params]: [string, Params]) => {
    const { page, size, title, format, date } = params;

    const filter = { title, format, date, owner };

    this.eventFacade.setParams({ page, size, filter });

    this.eventFacade.load();
  };

  openSearchLeader() {
    this.searchLeader.open().subscribe((leader) => {
      if (leader) this.setAccountRef(leader);
    });
  }

  openRSVP(event: string) {
    this.rsvpFacade.load(event);

    this.rsvpFacade.response$.pipe(skip(1), take(1)).subscribe((data) => {
      if (data) this.eventRSVP.open(data);
    });
  }

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
