import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { AccountRef, JobOpening } from '@devmx/shared-api-interfaces';
import { JobOpeningCardComponent } from '@devmx/career-ui-shared';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DialogFacade } from '@devmx/shared-ui-global/dialog';
import { JobOpeningFacade } from '@devmx/career-data-access';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { SelectAccount } from '@devmx/account-ui-shared';
import { observer } from '@devmx/shared-util-data';
import { AsyncPipe } from '@angular/common';
import { combineLatest, map } from 'rxjs';

@Component({
  selector: 'devmx-career-admin-manage-job-openings',
  templateUrl: './manage-job-openings.container.html',
  styleUrl: './manage-job-openings.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterModule,
    MatButtonModule,
    MatTooltipModule,
    JobOpeningCardComponent,
    PaginatorComponent,
    IconComponent,
    AsyncPipe,
  ],
  standalone: true,
})
export class ManageJobOpeningsContainer {
  router = inject(Router);

  route = inject(ActivatedRoute);

  dialogFacade = inject(DialogFacade);

  jobOpeningFacade = inject(JobOpeningFacade);

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

    const { open = null, active = null } = params;

    const filter = { open, active, owner };

    this.jobOpeningFacade.setParams({ page, size, filter });

    this.jobOpeningFacade.load();
  };

  deleteJobOpening({ id, title }: JobOpening) {
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

  openSelectAccount() {
    this.selectAccount
      .open({ onlyRole: 'recruiter', multiple: false })
      .subscribe((account) => {
        if (account) this.#accountRef.update(account);
      });
  }

  onPageChange({ page, size }: PageParams) {
    const queryParams = { page, size };
    this.router.navigate([], { queryParams });
  }
}
