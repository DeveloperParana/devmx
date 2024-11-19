import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { SearchFieldComponent } from '@devmx/shared-ui-global/search';
import { UserRef, Album } from '@devmx/shared-api-interfaces';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DialogFacade } from '@devmx/shared-ui-global/dialog';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { AlbumFacade } from '@devmx/album-data-access';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { SelectUser } from '@devmx/account-ui-shared';
import { observer } from '@devmx/shared-util-data';
import { AsyncPipe } from '@angular/common';
import { combineLatest, map } from 'rxjs';

@Component({
    selector: 'devmx-album-admin-manage-albums',
    templateUrl: './manage-albums.container.html',
    styleUrl: './manage-albums.container.scss',
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
    ]
})
export class ManageAlbumsContainer {
  router = inject(Router);

  route = inject(ActivatedRoute);

  dialogFacade = inject(DialogFacade);

  albumFacade = inject(AlbumFacade);

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
  }

  onQueryParams = ([owner, params]: [string, Params]) => {
    const { page = 0, size = 10 } = params;

    const filter = { title: '', owner };

    this.albumFacade.setParams({ page, size, filter });

    this.albumFacade.load();
  };

  openDelete({ id, title }: Album) {
    this.dialogFacade
      .confirm(
        `Confirme que deseja apagar o album ${title}`,
        `Esta ação não poderá ser desfeita`
      )
      .subscribe((confirmation) => {
        if (confirmation) {
          this.albumFacade.delete(id);
        }
      });
  }

  openSelectUser() {
    this.selectUser.open({ multiple: false }).subscribe((user) => {
      if (user) this.#userRef.update(user);
    });
  }

  onSearchChange(title = '') {
    this.albumFacade.setFilter({ title });
    this.albumFacade.load();
  }

  onPageChange({ page, size }: PageParams) {
    const queryParams = { page, size };
    this.router.navigate([], { queryParams });
  }
}
