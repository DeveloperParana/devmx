import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { SkeletonComponent } from '@devmx/shared-ui-global/skeleton';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Layout } from '@devmx/shared-ui-global/layout';
import { JobFacade } from '@devmx/career-data-access';
import { JobCardComponent } from '../../components';
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
    RouterModule,
    AsyncPipe,
  ],
  standalone: true,
})
export class CareersContainer implements OnInit {
  jobFacade = inject(JobFacade);

  layout = inject(Layout);

  destroyRef = inject(DestroyRef);

  router = inject(Router);

  route = inject(ActivatedRoute);

  ngOnInit() {
    this.layout.openSidenav();

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
