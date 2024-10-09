import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormService, provideFormDialog } from '@devmx/shared-ui-global/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AccountFacade } from '@devmx/account-data-access';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { JobFacade } from '@devmx/career-data-access';
import { AsyncPipe } from '@angular/common';
import { createJob } from '../../forms';
import { take } from 'rxjs';
import {
  inject,
  OnInit,
  Component,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-account-jobs',
  templateUrl: './jobs.container.html',
  styleUrl: './jobs.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideFormDialog()],
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    PaginatorComponent,
    RouterModule,
    AsyncPipe,
  ],
  standalone: true,
})
export class JobsContainer implements OnInit {
  router = inject(Router);

  route = inject(ActivatedRoute);

  destroyRef = inject(DestroyRef);

  jobFacade = inject(JobFacade);

  accountFacade = inject(AccountFacade);

  formService = inject(FormService);

  ngOnInit() {
    this.route.queryParams
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(({ page = 0, size = 10 }) => {
        this.accountFacade.loadJobs(page, size);
      });
  }

  openCreate() {
    const title = 'Criar vaga';
    const job$ = this.formService.open({ title, ...createJob }).afterClosed();

    job$.pipe(take(1)).subscribe((result) => {
      if (result) {
        this.jobFacade.job$.pipe(take(1)).subscribe(() => {
          this.accountFacade.loadJobs();
        });

        this.jobFacade.create(result);
      }
    });
  }

  onPageChange({ page, size }: PageParams) {
    this.accountFacade.loadJobs(page, size);
  }
}
