import { ChangeRolesService, provideChangeRoles } from '../../dialogs';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { AccountOut, AuthUser } from '@devmx/shared-api-interfaces';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { AsyncPipe, DatePipe } from '@angular/common';
import { FilterAccountForm } from '../../forms';
import {
  PhotoPipe,
  GenderPipe,
  PageParams,
  PaginatorComponent,
} from '@devmx/shared-ui-global';
import {
  AuthFacade,
  AccountFacade,
  FilterAccount,
} from '@devmx/account-data-access';
import { take } from 'rxjs';
import {
  inject,
  OnInit,
  Component,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  FormField,
  FilterComponent,
  TextboxFormField,
} from '@devmx/shared-ui-global/filter';

@Component({
  selector: 'devmx-accounts',
  templateUrl: './accounts.container.html',
  styleUrl: './accounts.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    FilterComponent,
    PaginatorComponent,
    RouterModule,
    GenderPipe,
    PhotoPipe,
    AsyncPipe,
    DatePipe,
  ],
  providers: [provideChangeRoles()],
  standalone: true,
})
export class AccountsContainer implements OnInit {
  router = inject(Router);

  route = inject(ActivatedRoute);

  destroyRef = inject(DestroyRef);

  authFacade = inject(AuthFacade);

  accountFacade = inject(AccountFacade);

  changeRoles = inject(ChangeRolesService);

  filterForm = new FilterAccountForm();

  filterFields: FormField[] = [
    new TextboxFormField({
      key: 'name',
      label: 'Nome',
      order: 0,
      controlType: 'text',
    }),
    new TextboxFormField({
      key: 'username',
      label: 'Usuário',
      order: 1,
      controlType: 'text',
    }),
  ];

  ngOnInit() {
    this.route.queryParams
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params: Params) => {
        const { page = 0, size = 10 } = params;
        const { name = '', username = '' } = params;
        const filter = { name, username };

        this.accountFacade.setParams({ page, size, filter });

        this.accountFacade.load();
      });
  }

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

  onFilterChange(queryParams: FilterAccount) {
    this.router.navigate([], { queryParams });
  }

  onPageChange(queryParams: PageParams) {
    this.router.navigate([], { queryParams });
  }
}
