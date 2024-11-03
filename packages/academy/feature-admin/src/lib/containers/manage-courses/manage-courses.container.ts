import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { AccountRef, Course } from '@devmx/shared-api-interfaces';
import { CourseCardComponent } from '@devmx/academy-ui-shared';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DialogFacade } from '@devmx/shared-ui-global/dialog';
import { CourseFacade } from '@devmx/academy-data-access';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { SelectAccount } from '@devmx/account-ui-shared';
import { observer } from '@devmx/shared-util-data';
import { AsyncPipe } from '@angular/common';
import { combineLatest, map } from 'rxjs';

@Component({
  selector: 'devmx-career-admin-manage-courses',
  templateUrl: './manage-courses.container.html',
  styleUrl: './manage-courses.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterModule,
    MatButtonModule,
    MatTooltipModule,
    CourseCardComponent,
    PaginatorComponent,
    IconComponent,
    AsyncPipe,
  ],
  standalone: true,
})
export class ManageCoursesContainer {
  router = inject(Router);

  route = inject(ActivatedRoute);

  dialogFacade = inject(DialogFacade);

  courseFacade = inject(CourseFacade);

  selectAccount = inject(SelectAccount);

  #accountRef = observer<AccountRef | null>(null);

  constructor() {
    const account$ = this.#accountRef
      .observe()
      .pipe(map((user) => (user ? user.id : '')));

    const params$ = this.route.queryParams;

    combineLatest([account$, params$])
      .pipe(takeUntilDestroyed())
      .subscribe(this.onQueryParams);
  }

  onQueryParams = ([owner, params]: [string, Params]) => {
    const { page = 0, size = 10 } = params;

    const filter = { name: '', owner };

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

  openSelectAccount() {
    this.selectAccount
      .open({ onlyRole: 'academic', multiple: false })
      .subscribe((account) => {
        if (account) this.#accountRef.update(account);
      });
  }

  onPageChange({ page, size }: PageParams) {
    const queryParams = { page, size };
    this.router.navigate([], { queryParams });
  }
}
