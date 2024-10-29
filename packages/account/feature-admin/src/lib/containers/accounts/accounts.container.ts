import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { inject, Component, ChangeDetectionStrategy } from '@angular/core';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { ChangeRolesService, provideChangeRoles } from '../../dialogs';
import { AccountOut, AuthUser } from '@devmx/shared-api-interfaces';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DialogFacade } from '@devmx/shared-ui-global/dialog';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { AsyncPipe } from '@angular/common';
import { take } from 'rxjs';
import {
  AccountCardComponent,
  AccountSearchComponent,
} from '@devmx/account-ui-shared';
import {
  AuthFacade,
  AccountFacade,
  FilterAccount,
} from '@devmx/account-data-access';

@Component({
  selector: 'devmx-accounts',
  templateUrl: './accounts.container.html',
  styleUrl: './accounts.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatButtonModule,
    PaginatorComponent,
    AccountCardComponent,
    AccountSearchComponent,
    IconComponent,
    RouterModule,
    AsyncPipe,
  ],
  providers: [provideChangeRoles()],
  standalone: true,
})
export class AccountsContainer {
  router = inject(Router);

  route = inject(ActivatedRoute);

  authFacade = inject(AuthFacade);

  accountFacade = inject(AccountFacade);

  dialogFacade = inject(DialogFacade);

  changeRoles = inject(ChangeRolesService);

  constructor() {
    this.route.queryParams
      .pipe(takeUntilDestroyed())
      .subscribe(this.onQueryParams);
  }

  onQueryParams = (params: Params) => {
    const { page = 0, size = 10 } = params;
    const { name = '', username = '' } = params;
    const filter = { name, username };

    this.accountFacade.setParams({ page, size, filter });

    this.accountFacade.load();
  };

  openRoles(assigner: AuthUser, assign: AccountOut) {
    const changeRoles$ = this.changeRoles
      .open({ assigner, assign })
      .afterClosed();

    changeRoles$.pipe(take(1)).subscribe((data) => {
      if (data) {
        this.accountFacade.changeRoles(data);
      }
    });
  }

  openDelete(account: AccountOut) {
    this.dialogFacade
      .confirm(
        `Confirme que deseja remover a conta de ${account.name.first}`,
        `Esta ação não poderá ser desfeita`
      )
      .subscribe((confirmation) => {
        if (confirmation) {
          this.accountFacade.remove(account.id);
        }
      });
  }

  onFilterChange(queryParams: FilterAccount) {
    this.router.navigate([], { queryParams });
  }

  onPageChange(queryParams: PageParams) {
    this.router.navigate([], { queryParams });
  }
}
