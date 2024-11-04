import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { SearchFieldComponent } from '@devmx/shared-ui-global/search';
import { UserRef, Presentation } from '@devmx/shared-api-interfaces';
import { PresentationFacade } from '@devmx/presentation-data-access';
import { AuthenticationFacade } from '@devmx/account-data-access';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DialogFacade } from '@devmx/shared-ui-global/dialog';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { SelectUser } from '@devmx/account-ui-shared';
import { observer } from '@devmx/shared-util-data';
import { AsyncPipe } from '@angular/common';
import { combineLatest, map } from 'rxjs';

@Component({
  selector: 'devmx-manage-presentations',
  templateUrl: './manage-presentations.container.html',
  styleUrl: './manage-presentations.container.scss',
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
  standalone: true,
})
export class ManagePresentationsContainer {
  router = inject(Router);

  route = inject(ActivatedRoute);

  dialogFacade = inject(DialogFacade);

  authFacade = inject(AuthenticationFacade);

  presentationFacade = inject(PresentationFacade);

  selectUser = inject(SelectUser);

  #userRef = observer<UserRef | null>(null);

  columns = ['title', 'owner', 'actions'];

  constructor() {
    const user$ = this.#userRef
      .observe()
      .pipe(map((user) => (user ? user.id : '')));

    const params$ = this.route.queryParams;

    combineLatest([user$, params$])
      .pipe(takeUntilDestroyed())
      .subscribe(this.onQueryParams);

    this.presentationFacade.load()
  }

  setUserRef(userRef: UserRef | null = null) {
    this.#userRef.update(userRef);
  }

  openSelectUser() {
    this.selectUser
      .open({ onlyRole: 'speaker', multiple: false })
      .subscribe((user) => {
        if (user) this.setUserRef(user);
      });
  }

  openDelete({ id, title }: Presentation) {
    this.dialogFacade
      .confirm(
        `Confirme que deseja apagar a apresentação ${title}`,
        `Esta ação não poderá ser desfeita`
      )
      .subscribe((confirmation) => {
        if (confirmation) {
          this.presentationFacade.delete(id);
        }
      });
  }

  onQueryParams = ([owner, params]: [string, Params]) => {
    const { page = 0, size = 10 } = params;

    const { title = '', format = '' } = params;

    const filter = { title, format, owner };

    this.presentationFacade.setParams({ page, size, filter });

    this.presentationFacade.load();
  };

  onSearchChange(title = '') {
    this.presentationFacade.setFilter({ title });
    this.presentationFacade.load();
  }

  onPageChange({ page, size }: PageParams) {
    const queryParams = { page, size };
    this.router.navigate([], { queryParams });
  }
}
