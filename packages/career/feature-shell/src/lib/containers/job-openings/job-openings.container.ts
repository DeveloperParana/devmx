import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { SkeletonComponent } from '@devmx/shared-ui-global/skeleton';
import { JobOpeningCardComponent } from '@devmx/career-ui-shared';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LayoutFacade } from '@devmx/shared-ui-global/layout';
import { JobOpeningFacade } from '@devmx/career-data-access';
import { JobFilterComponent } from '../../components';
import { AsyncPipe } from '@angular/common';
import {
  inject,
  Component,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-job-openings',
  templateUrl: './job-openings.container.html',
  styleUrl: './job-openings.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    JobOpeningCardComponent,
    PaginatorComponent,
    SkeletonComponent,
    RouterModule,
    AsyncPipe,
  ],
  standalone: true,
})
export class JobOpeningsContainer {
  jobOpeningFacade = inject(JobOpeningFacade);

  layoutFacade = inject(LayoutFacade);

  destroyRef = inject(DestroyRef);

  router = inject(Router);

  route = inject(ActivatedRoute);

  constructor() {
    this.route.queryParams
      .pipe(takeUntilDestroyed())
      .subscribe(this.onQueryParams);

    this.layoutFacade.setComponent(JobFilterComponent);
    this.layoutFacade.setSidenav({ start: true });

    this.destroyRef.onDestroy(() => {
      this.layoutFacade.resetComponent();
    });
  }

  onQueryParams = (params: Params) => {
    const {
      title = '',
      description = '',
      contract = '',
      experience = '',
      mode = '',
    } = params;

    const filter = { title, description, contract, experience, mode };

    const { page = 0, size = 10 } = params;

    this.jobOpeningFacade.setParams({ page, size, filter });

    this.jobOpeningFacade.load();
  };

  onPageChange(queryParams: PageParams) {
    this.router.navigate([], { queryParams });
  }
}
