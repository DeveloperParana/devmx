import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { FormGroupComponent } from '@devmx/shared-ui-global/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { SelectionModel } from '@angular/cdk/collections';
import { AccountRef } from '@devmx/shared-api-interfaces';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import {
  MatDialogRef,
  MatDialogModule,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import {
  AccountFacade,
  FilterAccount,
  provideAccount,
} from '@devmx/account-data-access';
import {
  OnInit,
  inject,
  Component,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  searchLeadersControls,
  searchLeadersFields,
} from './search-leaders.fields';

@Component({
  selector: 'devmx-search-leaders',
  templateUrl: './search-leaders.dialog.html',
  styleUrl: './search-leaders.dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideAccount()],
  imports: [
    MatDialogModule,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule,
    PaginatorComponent,
    FormGroupComponent,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  standalone: true,
})
export class SearchLeadersDialog implements OnInit {
  ref = inject<MatDialogRef<SearchLeadersDialog, AccountRef[]>>(MatDialogRef);

  data = inject<AccountRef[]>(MAT_DIALOG_DATA);

  accountFacade = inject(AccountFacade);

  destroyRef = inject(DestroyRef);

  displayedColumns: string[] = ['select', 'name', 'username', 'email'];
  selection = new SelectionModel<AccountRef>(true, []);

  filter = {
    fields: searchLeadersFields,
    formGroup: searchLeadersControls,
  };

  ngOnInit() {
    this.accountFacade.loadLeaders();
    if (this.data) {
      this.selection.select(...this.data);
    }
  }

  onFilterChange(filter: FilterAccount) {
    this.accountFacade.setFilter(filter);
    this.accountFacade.loadLeaders();
  }

  onPageChange({ page, size }: PageParams) {
    this.accountFacade.loadLeaders(page, size);
  }

  isSelected(row: AccountRef) {
    return this.selection.selected.find((account) => account.id === row.id);
  }

  checkboxLabel(row?: AccountRef): string {
    if (!row) {
      return 'Marcar';
    }
    const prefix = this.selection.isSelected(row) ? 'desmarcar' : 'marcar';

    return `${prefix} row ${row.name.first}`;
  }
}
