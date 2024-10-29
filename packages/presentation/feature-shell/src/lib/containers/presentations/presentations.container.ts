import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { PresentationFacade } from '@devmx/presentation-data-access';
import { SkeletonComponent } from '@devmx/shared-ui-global/skeleton';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LayoutFacade } from '@devmx/shared-ui-global/layout';
import { AsyncPipe } from '@angular/common';
import {
  PresentationCardComponent,
  PresentationFilterComponent,
} from '@devmx/presentation-ui-shared';
import {
  inject,
  Component,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-presentations',
  templateUrl: './presentations.container.html',
  styleUrl: './presentations.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SkeletonComponent,
    PaginatorComponent,
    PresentationCardComponent,
    RouterModule,
    AsyncPipe,
  ],
  standalone: true,
})
export class PresentationsContainer {
  presentationFacade = inject(PresentationFacade);

  layoutFacade = inject(LayoutFacade);

  destroyRef = inject(DestroyRef);

  router = inject(Router);

  route = inject(ActivatedRoute);

  constructor() {
    this.route.queryParams
      .pipe(takeUntilDestroyed())
      .subscribe(this.onQueryParams);

    this.layoutFacade.setComponent(PresentationFilterComponent);
    this.layoutFacade.setSidenav({ start: true });

    this.destroyRef.onDestroy(() => {
      this.layoutFacade.resetComponent();
    });
  }

  onQueryParams = (params: Params) => {
    const { page = 0, size = 10 } = params;
    const { title = '', format = '' } = params;
    const filter = { title, format };
    console.log(filter);

    this.presentationFacade.setParams({ page, size, filter });
    this.presentationFacade.load();
  };

  onPageChange(queryParams: PageParams) {
    this.router.navigate([], { queryParams });
  }
}
