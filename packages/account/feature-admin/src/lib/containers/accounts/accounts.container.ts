import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { AccountFacade, FilterAccount } from '@devmx/account-data-access';
import { MatButtonModule } from '@angular/material/button';
import { FilterAccountComponent } from '../../components';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe, DatePipe } from '@angular/common';
import { GenderPipe } from '@devmx/shared-ui-global';
import { RouterLink } from '@angular/router';
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
    MatPaginatorModule,
    MatTableModule,
    FilterAccountComponent,
    RouterLink,
    GenderPipe,
    AsyncPipe,
    DatePipe,
  ],
  standalone: true,
})
export class AccountsContainer implements OnInit {
  accountFacade = inject(AccountFacade);

  columns = ['name', 'username', 'gender', 'birthday'];

  ngOnInit() {
    this.accountFacade.load();
  }

  find(filter: FilterAccount) {
    this.accountFacade.setFilter(filter);
    this.accountFacade.load();
  }

  onPageChange(event: PageEvent) {
    this.accountFacade.load(event.pageIndex, event.pageSize);
  }
}
