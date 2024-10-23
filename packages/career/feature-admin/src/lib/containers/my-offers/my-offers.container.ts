import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { FormService } from '@devmx/shared-ui-global/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { JobFacade } from '@devmx/career-data-access';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'devmx-my-offers',
  templateUrl: './my-offers.container.html',
  styleUrl: './my-offers.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterModule,
    MatCardModule,
    MatButtonModule,
    PaginatorComponent,
    IconComponent,
    AsyncPipe,
  ],
  standalone: true,
})
export class MyOffersContainer {
  router = inject(Router);

  route = inject(ActivatedRoute);

  jobFacade = inject(JobFacade);

  formService = inject(FormService);

  constructor() {
    this.route.queryParams
      .pipe(takeUntilDestroyed())
      .subscribe(({ page = 0, size = 10 }) => {
        this.jobFacade.load(page, size);
      });
  }

  openCreate() {
    //
  }

  onPageChange({ page, size }: PageParams) {
    const queryParams = { page, size };
    this.router.navigate([], { queryParams });
  }
}
