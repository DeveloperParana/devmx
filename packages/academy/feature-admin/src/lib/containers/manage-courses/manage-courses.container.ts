import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { SearchFieldComponent } from '@devmx/shared-ui-global/search';
import { UserRef, Course } from '@devmx/shared-api-interfaces';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DialogFacade } from '@devmx/shared-ui-global/dialog';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { CourseFacade } from '@devmx/academy-data-access';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { SelectUser } from '@devmx/account-ui-shared';
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
    SearchFieldComponent,
    PaginatorComponent,
    MatTableModule,
    MatCardModule,
    IconComponent,
    AsyncPipe,
  ],
})
export class ManageCoursesContainer {
  router = inject(Router);

  route = inject(ActivatedRoute);

  dialogFacade = inject(DialogFacade);

  courseFacade = inject(CourseFacade);

  selectUser = inject(SelectUser);

  #userRef = observer<UserRef | null>(null);

  columns = ['name', 'owner', 'actions'];

  constructor() {
    const user$ = this.#userRef
      .observe()
      .pipe(map((user) => (user ? user.id : '')));

    const params$ = this.route.queryParams;

    combineLatest([user$, params$])
      .pipe(takeUntilDestroyed())
      .subscribe(this.onQueryParams);
  }

  onQueryParams = ([owner, params]: [string, Params]) => {
    const { page = 0, size = 10 } = params;

    const filter = { name: '', owner };

    this.courseFacade.setParams({ page, size, filter });

    this.courseFacade.load();
  };

  openDelete({ id, name }: Course) {
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

  openSelectUser() {
    this.selectUser
      .open({ onlyRole: 'academic', multiple: false })
      .subscribe((user) => {
        if (user) this.#userRef.update(user);
      });
  }

  onSearchChange(name = '') {
    this.courseFacade.setFilter({ name });
    this.courseFacade.load();
  }

  onPageChange({ page, size }: PageParams) {
    const queryParams = { page, size };
    this.router.navigate([], { queryParams });
  }
}
