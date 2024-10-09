import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
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
  // changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    PaginatorComponent,
    AsyncPipe,
  ],
  standalone: true,
})
export class CareersContainer implements OnInit {
  jobFacade = inject(JobFacade);

  destroyRef = inject(DestroyRef);

  router = inject(Router);

  route = inject(ActivatedRoute);

  ngOnInit() {
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

  open(id: string) {
    this.router.navigate([{ outlets: { left: [id] } }]);
  }

  onPageChange(queryParams: PageParams) {
    this.router.navigate([], { queryParams });
  }
}
