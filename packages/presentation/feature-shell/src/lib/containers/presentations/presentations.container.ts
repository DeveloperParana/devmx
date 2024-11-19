import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { inject, Component, ChangeDetectionStrategy } from '@angular/core';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { PresentationFacade } from '@devmx/presentation-data-access';
import { SkeletonComponent } from '@devmx/shared-ui-global/skeleton';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
import {
  PresentationCardComponent,
  PresentationFilterComponent,
} from '@devmx/presentation-ui-shared';

@Component({
    selector: 'devmx-presentations',
    templateUrl: './presentations.container.html',
    styleUrl: './presentations.container.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        SkeletonComponent,
        PaginatorComponent,
        PresentationFilterComponent,
        PresentationCardComponent,
        RouterModule,
        AsyncPipe,
    ]
})
export class PresentationsContainer {
  presentationFacade = inject(PresentationFacade);

  router = inject(Router);

  route = inject(ActivatedRoute);

  constructor() {
    this.route.queryParams
      .pipe(takeUntilDestroyed())
      .subscribe(this.onQueryParams);
  }

  onQueryParams = (params: Params) => {
    const { page = 0, size = 10 } = params;
    const { title = '', format = '' } = params;
    const filter = { title, format };

    this.presentationFacade.setParams({ page, size, filter });
    this.presentationFacade.load();
  };

  onFilterChange(format: string) {
    const queryParams = { format };
    this.router.navigate([], { queryParams });
  }

  onPageChange(queryParams: PageParams) {
    this.router.navigate([], { queryParams });
  }
}
