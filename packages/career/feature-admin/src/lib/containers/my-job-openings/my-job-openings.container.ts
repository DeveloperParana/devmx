import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { JobOpeningCardComponent } from '@devmx/career-ui-shared';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DialogFacade } from '@devmx/shared-ui-global/dialog';
import { JobOpeningFacade } from '@devmx/career-data-access';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { JobOpening } from '@devmx/shared-api-interfaces';
import { AuthenticationFacade } from '@devmx/account-data-access';
import { combineLatest, filter, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'devmx-career-admin-my-job-openings',
  templateUrl: './my-job-openings.container.html',
  styleUrl: './my-job-openings.container.scss',
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
})
export class MyJobOpeningsContainer {
  router = inject(Router);

  route = inject(ActivatedRoute);

  dialogFacade = inject(DialogFacade);

  authFacade = inject(AuthenticationFacade);

  jobOpeningFacade = inject(JobOpeningFacade);

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
    const { page, size, open, active } = params;

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

  onPageChange({ page, size }: PageParams) {
    const queryParams = { page, size };
    this.router.navigate([], { queryParams });
  }
}
