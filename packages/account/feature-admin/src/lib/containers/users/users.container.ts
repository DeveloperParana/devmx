import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { AuthenticationFacade, UserFacade } from '@devmx/account-data-access';
import { inject, Component, ChangeDetectionStrategy } from '@angular/core';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { SearchFieldComponent } from '@devmx/shared-ui-global/search';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DialogFacade } from '@devmx/shared-ui-global/dialog';
import { UserCardComponent } from '@devmx/account-ui-shared';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { User } from '@devmx/shared-api-interfaces';
import { AsyncPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'devmx-users',
  templateUrl: './users.container.html',
  styleUrl: './users.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    PaginatorComponent,
    SearchFieldComponent,
    UserCardComponent,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    IconComponent,
    RouterModule,
    AsyncPipe,
  ],
  standalone: true,
})
export class UsersContainer {
  router = inject(Router);

  route = inject(ActivatedRoute);

  authFacade = inject(AuthenticationFacade);

  userFacade = inject(UserFacade);

  dialogFacade = inject(DialogFacade);

  columns = ['displayName', 'name', 'actions'];

  constructor() {
    this.route.queryParams
      .pipe(takeUntilDestroyed())
      .subscribe(this.onQueryParams);
  }

  onQueryParams = (params: Params) => {
    const { page = 0, size = 10 } = params;
    const { name = '', username = '' } = params;
    const filter = { name, username };

    this.userFacade.setParams({ page, size, filter });

    this.userFacade.load();
  };

  openDelete(user: User) {
    this.dialogFacade
      .confirm(
        `Confirme que deseja remover o usuário de ${user.displayName}`,
        `Esta ação não poderá ser desfeita`
      )
      .subscribe((confirmation) => {
        if (confirmation) {
          this.userFacade.delete(user.id);
        }
      });
  }

  onSearchChange(displayName = '') {
    this.userFacade.setFilter({ displayName });
    this.userFacade.load();
  }

  onPageChange(queryParams: PageParams) {
    this.router.navigate([], { queryParams });
  }
}
