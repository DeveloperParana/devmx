import { ChangeRolesService, provideChangeRoles } from '../../dialogs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AccountOut, AuthUser } from '@devmx/shared-api-interfaces';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { FilterAccountComponent } from '../../components';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe, DatePipe } from '@angular/common';
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

@Component({
  selector: 'devmx-accounts',
  templateUrl: './accounts.container.html',
  styleUrl: './accounts.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    FilterAccountComponent,
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

  ngOnInit() {
    this.route.queryParams
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(({ page = 0, size = 10 }) => {
        this.accountFacade.load(page, size);
      });
  }

  find(filter: FilterAccount) {
    this.accountFacade.setFilter(filter);
    this.accountFacade.load();
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

  onPageChange({ page, size }: PageParams) {
    this.router.navigate([], { queryParams: { page, size } });
  }
}
