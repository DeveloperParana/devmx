import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { inject, Component, ChangeDetectionStrategy } from '@angular/core';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { SkeletonComponent } from '@devmx/shared-ui-global/skeleton';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { JobOpeningFacade } from '@devmx/career-data-access';
import { AsyncPipe } from '@angular/common';
import {
  JobOpeningCardComponent,
  JobOpeningModeFilterComponent,
  JobOpeningExperienceFilterComponent,
} from '@devmx/career-ui-shared';

@Component({
  selector: 'devmx-job-openings',
  templateUrl: './job-openings.container.html',
  styleUrl: './job-openings.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    JobOpeningExperienceFilterComponent,
    JobOpeningModeFilterComponent,
    JobOpeningCardComponent,
    PaginatorComponent,
    SkeletonComponent,
    RouterModule,
    AsyncPipe,
  ]
})
export class JobOpeningsContainer {
  jobOpeningFacade = inject(JobOpeningFacade);

  router = inject(Router);

  route = inject(ActivatedRoute);

  constructor() {
    this.route.queryParams
      .pipe(takeUntilDestroyed())
      .subscribe(this.onQueryParams);
  }

  onQueryParams = (params: Params) => {
    const { page = 0, size = 10 } = params;

    const { experience = '', mode = '' } = params;

    const filter = { experience, mode };

    this.jobOpeningFacade.setParams({ page, size, filter });

    this.jobOpeningFacade.load();
  };

  onExperienceFilterChange(experience: string) {
    const queryParams = this.mergeParams({ experience });
    this.router.navigate([], { queryParams });
  }

  onModeFilterChange(mode: string) {
    const queryParams = this.mergeParams({ mode });
    this.router.navigate([], { queryParams });
  }

  mergeParams(params: Params) {
    return { ...this.route.snapshot.queryParams, ...params };
  }

  onPageChange(queryParams: PageParams) {
    this.router.navigate([], { queryParams });
  }
}
