import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { UserRef, JobOpening } from '@devmx/shared-api-interfaces';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DialogFacade } from '@devmx/shared-ui-global/dialog';
import { JobOpeningFacade } from '@devmx/career-data-access';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { SelectUser } from '@devmx/account-ui-shared';
import { observer } from '@devmx/shared-util-data';
import { AsyncPipe } from '@angular/common';
import { combineLatest, map } from 'rxjs';
import { SearchFieldComponent } from '@devmx/shared-ui-global/search';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'devmx-career-admin-manage-job-openings',
  templateUrl: './manage-job-openings.container.html',
  styleUrl: './manage-job-openings.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterModule,
    MatButtonModule,
    SearchFieldComponent,
    MatTableModule,
    MatCardModule,
    MatTooltipModule,
    PaginatorComponent,
    IconComponent,
    AsyncPipe,
  ],
})
export class ManageJobOpeningsContainer {
  router = inject(Router);

  route = inject(ActivatedRoute);

  dialogFacade = inject(DialogFacade);

  jobOpeningFacade = inject(JobOpeningFacade);

  selectUser = inject(SelectUser);

  #userRef = observer<UserRef | null>(null);

  columns = ['title', 'owner', 'actions'];

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

    const { open = null, active = null } = params;

    const filter = { open, active, owner };

    this.jobOpeningFacade.setParams({ page, size, filter });

    this.jobOpeningFacade.load();
  };

  openDelete({ id, title }: JobOpening) {
    this.dialogFacade
      .confirm(
        `Confirme que deseja apagar a vaga ${title}`,
        `Esta ação não poderá ser desfeita`
      )
      .subscribe((confirmation) => {
        if (confirmation) {
          this.jobOpeningFacade.delete(id);
        }
      });
  }

  openSelectUser() {
    this.selectUser
      .open({ onlyRole: 'recruiter', multiple: false })
      .subscribe((user) => {
        if (user) this.#userRef.update(user);
      });
  }

  onSearchChange(title = '') {
    this.jobOpeningFacade.setFilter({ title });
    this.jobOpeningFacade.load();
  }

  onPageChange({ page, size }: PageParams) {
    const queryParams = { page, size };
    this.router.navigate([], { queryParams });
  }
}
