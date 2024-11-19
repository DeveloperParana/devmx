import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { SkeletonComponent } from '@devmx/shared-ui-global/skeleton';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AlbumCardComponent } from '@devmx/album-ui-shared';
import { AlbumFacade } from '@devmx/album-data-access';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'devmx-admin-albums',
    templateUrl: './albums.container.html',
    styleUrl: './albums.container.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        AlbumCardComponent,
        PaginatorComponent,
        SkeletonComponent,
        RouterModule,
        AsyncPipe,
    ]
})
export class AlbumsContainer {
  albumFacade = inject(AlbumFacade);

  router = inject(Router);

  route = inject(ActivatedRoute);

  constructor() {
    this.route.queryParams
      .pipe(takeUntilDestroyed())
      .subscribe(this.onQueryParams);
  }

  onQueryParams = (params: Params) => {
    const { page = 0, size = 10 } = params;

    const { title = '' } = params;

    const filter = { title };

    this.albumFacade.setParams({ page, size, filter });

    this.albumFacade.load();
  };

  private mergeParams(params: Params) {
    return { ...this.route.snapshot.queryParams, ...params };
  }

  onPageChange(queryParams: PageParams) {
    this.router.navigate([], { queryParams });
  }
}
