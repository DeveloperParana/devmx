import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { MatListModule, MatListOption } from '@angular/material/list';
import { EditableAccount, Role } from '@devmx/shared-api-interfaces';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { AccountFacade } from '@devmx/account-data-access';
import { AccountSearchComponent } from '../../components';
import { ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { AccountSearch } from '../../forms';
import {
  MatDialogRef,
  MatDialogTitle,
  MatDialogActions,
  MatDialogContent,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface SelectAccountConfig {
  multiple?: boolean;
  onlyRole?: Role;
}

@Component({
  selector: 'devmx-select-account',
  templateUrl: './select-account.dialog.html',
  styleUrl: './select-account.dialog.scss',
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
export class SelectAccountDialog {
  accountFacade = inject(AccountFacade);

  ref =
    inject<
      MatDialogRef<SelectAccountDialog, EditableAccount | EditableAccount[]>
    >(MatDialogRef);

  data = inject<SelectAccountConfig>(MAT_DIALOG_DATA);

  constructor() {
    this.load();
  }

  onSearchChange(filter: AccountSearch) {
    this.accountFacade.setFilter(filter);
    this.load();
  }

  onPageChange({ page, size }: PageParams) {
    this.accountFacade.setParams({ page, size });
    this.load();
  }

  load() {
    if (this.data.onlyRole) {
      this.accountFacade.loadByRole(this.data.onlyRole);
    } else {
      this.accountFacade.load();
    }
  }

  close(selected: MatListOption[]) {
    if (this.data.multiple) {
      this.ref.close(selected.map((item) => item.value));
    } else {
      this.ref.close(selected[0].value);
    }
  }
}
