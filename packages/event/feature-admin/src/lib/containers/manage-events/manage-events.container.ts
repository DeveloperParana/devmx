import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { SearchFieldComponent } from '@devmx/shared-ui-global/search';
import { EventFacade, RSVPFacade } from '@devmx/event-data-access';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UserRef, Event } from '@devmx/shared-api-interfaces';
import { DialogFacade } from '@devmx/shared-ui-global/dialog';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { SelectUser } from '@devmx/account-ui-shared';
import { combineLatest, map, skip, take } from 'rxjs';
import { observer } from '@devmx/shared-util-data';
import { AsyncPipe } from '@angular/common';
import { EventRSVP } from '../../dialogs';

@Component({
  selector: 'devmx-event-admin-manage-events',
  templateUrl: './manage-events.container.html',
  styleUrl: './manage-events.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterModule,
    MatButtonModule,
    SearchFieldComponent,
    PaginatorComponent,
    MatTableModule,
    MatCardModule,
    IconComponent,
    AsyncPipe,
  ],
})
export class ManageEventsContainer {
  router = inject(Router);

  route = inject(ActivatedRoute);

  dialogFacade = inject(DialogFacade);

  eventFacade = inject(EventFacade);

  rsvpFacade = inject(RSVPFacade);

  eventRSVP = inject(EventRSVP);

  selectUser = inject(SelectUser);

  #userRef = observer<UserRef | null>(null);

  columns = ['title', 'owner', 'actions'];

  constructor() {
    const user$ = this.#userRef
      .observe()
      .pipe(map((user) => (user ? user.id : '')));

    const params$ = this.route.queryParams.pipe(
      map(({ page, size, title, format, date }) => {
        return { page, size, title, format, date };
      })
    );

    combineLatest([user$, params$])
      .pipe(takeUntilDestroyed())
      .subscribe(this.onQueryParams);

    this.eventFacade.loadAll();
  }

  setUserRef(userRef: UserRef | null = null) {
    this.#userRef.update(userRef);
  }

  onQueryParams = ([owner, params]: [string, Params]) => {
    const { page, size, title, format, date } = params;

    const filter = { title, format, date, owner };

    this.eventFacade.setParams({ page, size, filter });

    this.eventFacade.load();
  };

  openSelectUser() {
    this.selectUser
      .open({ onlyRole: 'leader', multiple: false })
      .subscribe((user) => {
        if (user) this.#userRef.update(user);
      });
  }

  openRSVP(event: string) {
    this.rsvpFacade.load(event);

    this.rsvpFacade.response$.pipe(skip(1), take(1)).subscribe((data) => {
      if (data) this.eventRSVP.open(data);
    });
  }

  openDelete({ id, title }: Event) {
    this.dialogFacade
      .confirm(
        `Confirme que deseja apagar o evento ${title}`,
        `Esta ação não poderá ser desfeita`
      )
      .subscribe((confirmation) => {
        if (confirmation) {
          this.eventFacade.delete(id);
        }
      });
  }

  onSearchChange(title = '') {
    this.eventFacade.setFilter({ title });
    this.eventFacade.loadAll();
  }

  onPageChange({ page, size }: PageParams) {
    const queryParams = { page, size };
    this.router.navigate([], { queryParams });
  }
}
