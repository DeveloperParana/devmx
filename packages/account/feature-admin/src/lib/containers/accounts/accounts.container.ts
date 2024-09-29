import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { ChangeRolesService, provideChangeRoles } from '../../dialogs';
import { AccountOut, AuthUser } from '@devmx/shared-api-interfaces';
import { GenderPipe, PhotoPipe } from '@devmx/shared-ui-global';
import { MatButtonModule } from '@angular/material/button';
import { FilterAccountComponent } from '../../components';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
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
    MatPaginatorModule,
    FilterAccountComponent,
    RouterLink,
    GenderPipe,
    PhotoPipe,
    AsyncPipe,
    DatePipe,
  ],
  providers: [provideChangeRoles()],
  standalone: true,
})
export class AccountsContainer implements OnInit {
  authFacade = inject(AuthFacade);

  accountFacade = inject(AccountFacade);

  changeRoles = inject(ChangeRolesService);

  ngOnInit() {
    this.accountFacade.load();
  }

  find(filter: FilterAccount) {
    this.accountFacade.setFilter(filter);
    this.accountFacade.load();
  }

  openRolesSheet(assigner: AuthUser, assign: AccountOut) {
    const changeRoles$ = this.changeRoles
      .open({ assigner, assign })
      .afterClosed();

    changeRoles$.pipe(take(1)).subscribe((data) => {
      if (data) {
        this.accountFacade.changeRoles(data);
        this.accountFacade.load();
      }
    });
  }

  onPageChange(event: PageEvent) {
    this.accountFacade.load(event.pageIndex, event.pageSize);
  }
}
