import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { AuthenticationFacade } from '@devmx/account-data-access';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CourseCardComponent } from '@devmx/academy-ui-shared';
import { DialogFacade } from '@devmx/shared-ui-global/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { CourseFacade } from '@devmx/academy-data-access';
import { MatListModule } from '@angular/material/list';
import { Course } from '@devmx/shared-api-interfaces';
import { combineLatest, filter, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'devmx-academy-admin-my-courses',
  templateUrl: './my-courses.container.html',
  styleUrl: './my-courses.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterModule,
    MatListModule,
    MatButtonModule,
    MatTooltipModule,
    PaginatorComponent,
    CourseCardComponent,
    IconComponent,
    AsyncPipe,
  ],
})
export class MyCoursesContainer {
  router = inject(Router);

  route = inject(ActivatedRoute);

  dialogFacade = inject(DialogFacade);

  authFacade = inject(AuthenticationFacade);

  courseFacade = inject(CourseFacade);

  constructor() {
    const user$ = this.authFacade.auth$.pipe(
      filter((user) => !!user),
      map(({ id }) => id)
    );

    const params$ = this.route.queryParams.pipe(
      map(({ page, size, open = null, active = null }) => {
        return { page, size, open, active };
      })
    );

    combineLatest([user$, params$])
      .pipe(takeUntilDestroyed())
      .subscribe(this.onQueryParams);
  }

  onQueryParams = ([owner, params]: [string, Params]) => {
    const { page, size, name = '' } = params;

    const filter = { name, owner };

    this.courseFacade.setParams({ page, size, filter });

    this.courseFacade.load();
  };

  deleteCourse({ id, name }: Course) {
    this.dialogFacade
      .confirm(
        `Confirme que deseja apagar o curso ${name}`,
        `Esta ação não poderá ser desfeita`
      )
      .subscribe((confirmation) => {
        if (confirmation) {
          this.courseFacade.delete(id);
        }
      });
  }

  onPageChange({ page, size }: PageParams) {
    const queryParams = { page, size };
    this.router.navigate([], { queryParams });
  }
}
