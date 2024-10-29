import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PresentationCardComponent } from '@devmx/presentation-ui-shared';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { PresentationFacade } from '@devmx/presentation-data-access';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DialogFacade } from '@devmx/shared-ui-global/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { Presentation } from '@devmx/shared-api-interfaces';
import { MatButtonModule } from '@angular/material/button';
import { AuthFacade } from '@devmx/account-data-access';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { combineLatest, filter, map } from 'rxjs';

@Component({
  selector: 'devmx-my-presentations',
  templateUrl: './my-presentations.container.html',
  styleUrl: './my-presentations.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterModule,
    MatButtonModule,
    MatTooltipModule,
    PaginatorComponent,
    PresentationCardComponent,
    IconComponent,
    AsyncPipe,
    JsonPipe,
  ],
  standalone: true,
})
export class MyPresentationsContainer {
  router = inject(Router);

  route = inject(ActivatedRoute);

  dialogFacade = inject(DialogFacade);

  authFacade = inject(AuthFacade);

  presentationFacade = inject(PresentationFacade);

  constructor() {
    const account$ = this.authFacade.user$.pipe(
      filter((account) => !!account),
      map((account) => account.id)
    );

    const params$ = this.route.queryParams;

    combineLatest([account$, params$])
      .pipe(takeUntilDestroyed())
      .subscribe(this.onQueryParams);
  }

  deletePresentation({ id, title }: Presentation) {
    this.dialogFacade
      .confirm(
        `Confirme que deseja apagar a apresentação ${title}`,
        `Esta ação não poderá ser desfeita`
      )
      .subscribe((confirmation) => {
        if (confirmation) {
          this.presentationFacade.delete(id);
        }
      });
  }

  onQueryParams = ([owner, params]: [string, Params]) => {
    const { page = 0, size = 10 } = params;

    const { title = '', format = '', visible = true } = params;

    const filter = { title, format, visible, owner };

    this.presentationFacade.setParams({ page, size, filter });

    this.presentationFacade.load();
  };

  onPageChange({ page, size }: PageParams) {
    const queryParams = { page, size };
    this.router.navigate([], { queryParams });
  }
}
