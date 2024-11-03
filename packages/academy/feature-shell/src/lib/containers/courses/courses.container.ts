import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { SkeletonComponent } from '@devmx/shared-ui-global/skeleton';
import { CourseCardComponent } from '@devmx/academy-ui-shared';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CourseFacade } from '@devmx/academy-data-access';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'devmx-courses',
  templateUrl: './courses.container.html',
  styleUrl: './courses.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    PaginatorComponent,
    SkeletonComponent,
    RouterModule,
    CourseCardComponent,
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

  onPageChange(queryParams: PageParams) {
    this.router.navigate([], { queryParams });
  }
}
