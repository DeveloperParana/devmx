import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DialogFacade } from '@devmx/shared-ui-global/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { AlbumCardComponent } from '@devmx/album-ui-shared';
import { MatButtonModule } from '@angular/material/button';
import { AuthFacade } from '@devmx/account-data-access';
import { AlbumFacade } from '@devmx/album-data-access';
import { Album } from '@devmx/shared-api-interfaces';
import { combineLatest, filter, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'devmx-admin-my-albums',
  templateUrl: './my-albums.container.html',
  styleUrl: './my-albums.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterModule,
    MatButtonModule,
    MatTooltipModule,
    PaginatorComponent,
    AlbumCardComponent,
    IconComponent,
    AsyncPipe,
  ],
  standalone: true,
})
export class MyAlbumsContainer {
  router = inject(Router);

  route = inject(ActivatedRoute);

  dialogFacade = inject(DialogFacade);

  authFacade = inject(AuthFacade);

  albumFacade = inject(AlbumFacade);

  constructor() {
    const user$ = this.authFacade.user$.pipe(
      filter((user) => !!user),
      map(({ id }) => id)
    );

    const params$ = this.route.queryParams.pipe(
      map(({ page, size, title }) => {
        return { page, size, title };
      })
    );

    combineLatest([user$, params$])
      .pipe(takeUntilDestroyed())
      .subscribe(this.onQueryParams);
  }

  onQueryParams = ([owner, params]: [string, Params]) => {
    const { page, size, title } = params;

    const filter = { title, owner };

    this.albumFacade.setParams({ page, size, filter });

    this.albumFacade.load();
  };

  deleteAlbum({ id, title }: Album) {
    this.dialogFacade
      .confirm(
        `Confirme que deseja apagar a vaga ${title}`,
        `Esta ação não poderá ser desfeita`
      )
      .subscribe((confirmation) => {
        if (confirmation) {
          this.albumFacade.delete(id);
        }
      });
  }

  onPageChange({ page, size }: PageParams) {
    const queryParams = { page, size };
    this.router.navigate([], { queryParams });
  }
}
