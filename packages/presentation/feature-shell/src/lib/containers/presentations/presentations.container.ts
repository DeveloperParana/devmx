import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { PresentationFacade } from '@devmx/presentation-data-access';
import { SkeletonComponent } from '@devmx/shared-ui-global/skeleton';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PresentationCardComponent } from '../../components';
import { Layout } from '@devmx/shared-ui-global/layout';
import { AsyncPipe } from '@angular/common';
import {
  inject,
  OnInit,
  Component,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-presentations',
  templateUrl: './presentations.container.html',
  styleUrl: './presentations.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SkeletonComponent,
    PaginatorComponent,
    PresentationCardComponent,
    RouterModule,
    AsyncPipe,
  ],
  standalone: true,
})
export class PresentationsContainer implements OnInit {
  presentationFacade = inject(PresentationFacade);

  layout = inject(Layout);

  destroyRef = inject(DestroyRef);

  router = inject(Router);

  route = inject(ActivatedRoute);

  ngOnInit() {
    this.layout.openSidenav();

    const onQueryParams = (params: Params) => {
      const { title = '', format = '' } = params;
      this.presentationFacade.setFilter({ title, format });

      const { page = 0, size = 10 } = params;
      this.presentationFacade.load(page, size);
    };

    this.route.queryParams
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(onQueryParams);
  }

  onPageChange(queryParams: PageParams) {
    this.router.navigate([], { queryParams });
  }
}
