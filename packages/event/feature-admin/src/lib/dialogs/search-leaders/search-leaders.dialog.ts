import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { MatListModule, MatListOption } from '@angular/material/list';
import { AccountSearchComponent } from '@devmx/account-ui-shared';
import { EditableAccount } from '@devmx/shared-api-interfaces';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe, JsonPipe } from '@angular/common';
import {
  MatDialogRef,
  MatDialogTitle,
  MatDialogActions,
  MatDialogContent,
} from '@angular/material/dialog';
import { AccountFacade } from '@devmx/account-data-access';
import { AccountSearch } from '@devmx/account-ui-shared';

@Component({
  selector: 'devmx-admin-search-leaders',
  templateUrl: './search-leaders.dialog.html',
  styleUrl: './search-leaders.dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    PaginatorComponent,
    AccountSearchComponent,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButtonModule,
    IconComponent,
    MatListModule,
    AsyncPipe,
    JsonPipe,
  ],
  standalone: true,
})
export class SearchLeadersDialog {
  accountFacade = inject(AccountFacade);

  ref =
    inject<MatDialogRef<SearchLeadersDialog, EditableAccount[]>>(MatDialogRef);

  constructor() {
    this.accountFacade.loadLeaders();
  }

  onSearchChange(filter: AccountSearch) {
    this.accountFacade.setFilter(filter);
    this.accountFacade.loadLeaders();
  }

  onPageChange({ page, size }: PageParams) {
    this.accountFacade.setParams({ page, size });
    this.accountFacade.loadLeaders();
  }

  close(selected: MatListOption[]) {
    this.ref.close(selected.map((option) => option.value));
  }
}
