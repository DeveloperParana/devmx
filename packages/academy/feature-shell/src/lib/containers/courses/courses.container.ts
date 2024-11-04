import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { SkeletonComponent } from '@devmx/shared-ui-global/skeleton';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CourseFacade } from '@devmx/academy-data-access';
import { AsyncPipe } from '@angular/common';
import {
  CourseCardComponent,
  CourseEADFilterComponent,
} from '@devmx/academy-ui-shared';

@Component({
  selector: 'devmx-courses',
  templateUrl: './courses.container.html',
  styleUrl: './courses.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    PaginatorComponent,
    CourseEADFilterComponent,
    CourseCardComponent,
    SkeletonComponent,
    RouterModule,
    AsyncPipe,
  ],
  standalone: true,
})
export class CoursesContainer {
  courseFacade = inject(CourseFacade);

  router = inject(Router);

  route = inject(ActivatedRoute);

  constructor() {
    this.route.queryParams
      .pipe(takeUntilDestroyed())
      .subscribe(this.onQueryParams);
  }

  onQueryParams = (params: Params) => {
    const { page = 0, size = 10 } = params;

    this.courseFacade.setParams({ page, size });
    this.courseFacade.load();
  };

  onEADFilterChange(ead: boolean) {
    const queryParams = this.mergeParams({ ead });
    this.router.navigate([], { queryParams });
  }

  mergeParams(params: Params) {
    return { ...this.route.snapshot.queryParams, ...params };
  }

  onPageChange(queryParams: PageParams) {
    this.router.navigate([], { queryParams });
  }
}
