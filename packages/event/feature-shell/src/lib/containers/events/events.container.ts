import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { SkeletonComponent } from '@devmx/shared-ui-global/skeleton';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthFacade } from '@devmx/account-data-access';
import { Layout } from '@devmx/shared-ui-global/layout';
import { EventFacade } from '@devmx/event-data-access';
import { EventCardComponent } from '../../components';
import { AsyncPipe } from '@angular/common';
import {
  inject,
  OnInit,
  Component,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { combineLatest } from 'rxjs';
import { AuthUser } from '@devmx/shared-api-interfaces';

@Component({
  selector: 'devmx-events',
  templateUrl: './events.container.html',
  styleUrl: './events.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    PaginatorComponent,
    EventCardComponent,
    SkeletonComponent,
    RouterModule,
    AsyncPipe,
  ],
  standalone: true,
})
export class EventsContainer implements OnInit {
  eventFacade = inject(EventFacade);

  authFacade = inject(AuthFacade);

  layout = inject(Layout);

  destroyRef = inject(DestroyRef);

  router = inject(Router);

  route = inject(ActivatedRoute);

  ngOnInit() {
    this.layout.openSidenav();

    /**
     * @todo criar PlaceCollection
     */
    const onUserAndQueryParams = ([user, params]: [
      AuthUser | null,
      Params
    ]) => {
      const { title = '', format = '' } = params;
      let { city } = params;
      city = city === 'true' && user && user.city ? user.city.id : '';
      this.eventFacade.setFilter({ title, format, city });

      const { page = 0, size = 10 } = params;
      this.eventFacade.load(page, size);
    };

    combineLatest([this.authFacade.user$, this.route.queryParams])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(onUserAndQueryParams);

    // const onQueryParams = (params: Params) => {
    //   const { title = '', format = '', distance } = params;
    //   this.eventFacade.setFilter({ title, format });

    //   const location = { min: 0, max: distance };
    //   this.eventFacade.setLocation({ min: 0, max: distance });

    //   const { page = 0, size = 10 } = params;
    //   this.eventFacade.load(page, size);
    // };
    // this.route.queryParams
    //   .pipe(takeUntilDestroyed(this.destroyRef))
    //   .subscribe(onQueryParams);
  }

  onPageChange(queryParams: PageParams) {
    this.router.navigate([], { queryParams });
  }
}
