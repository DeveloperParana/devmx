import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { JobCardComponent, JobFilterComponent } from '../../components';
import { SkeletonComponent } from '@devmx/shared-ui-global/skeleton';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutFacade } from '@devmx/shared-ui-global/layout';
import { JobFacade } from '@devmx/career-data-access';
import { AsyncPipe } from '@angular/common';
import {
  inject,
  OnInit,
  Component,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-careers',
  templateUrl: './careers.container.html',
  styleUrl: './careers.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    PaginatorComponent,
    SkeletonComponent,
    JobCardComponent,
    MatToolbarModule,
    RouterModule,
    AsyncPipe,
  ],
  standalone: true,
})
export class CareersContainer implements OnInit {
  jobFacade = inject(JobFacade);

  layoutFacade = inject(LayoutFacade);

  destroyRef = inject(DestroyRef);

  router = inject(Router);

  route = inject(ActivatedRoute);

  ngOnInit() {
    this.layoutFacade.setComponent(JobFilterComponent);
    this.layoutFacade.setSidenav({ start: true });

    this.destroyRef.onDestroy(() => {
      this.layoutFacade.resetComponent();
    });

    const onQueryParams = (params: Params) => {
      const {
        title = '',
        description = '',
        contract = '',
        experience = '',
        mode = '',
      } = params;

      const filter = { title, description, contract, experience, mode };
      this.jobFacade.setFilter(filter);

      const { page = 0, size = 10 } = params;
      this.jobFacade.load(page, size);
    };

    this.route.queryParams
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(onQueryParams);
  }

  onPageChange(queryParams: PageParams) {
    this.router.navigate([], { queryParams });
  }
}
