import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { MatListModule, MatListOption } from '@angular/material/list';
import { SearchFieldComponent } from '@devmx/shared-ui-global/search';
import { EditableUser, Role } from '@devmx/shared-api-interfaces';
import { MatButtonModule } from '@angular/material/button';
import { UserFacade } from '@devmx/account-data-access';
import { ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import {
  MatDialogRef,
  MatDialogTitle,
  MatDialogActions,
  MatDialogContent,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface SelectUserConfig {
  multiple?: boolean;
  onlyRole?: Role;
}

@Component({
  selector: 'devmx-select-user',
  templateUrl: './select-user.dialog.html',
  styleUrl: './select-user.dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    PaginatorComponent,
    SearchFieldComponent,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButtonModule,
    MatListModule,
    AsyncPipe,
  ],
})
export class SelectUserDialog {
  userFacade = inject(UserFacade);

  ref =
    inject<MatDialogRef<SelectUserDialog, EditableUser | EditableUser[]>>(
      MatDialogRef
    );

  data = inject<SelectUserConfig>(MAT_DIALOG_DATA);

  search = '';

  constructor() {
    this.load();
  }

  onSearchChange(displayName: string) {
    this.search = displayName;
    this.load();
  }

  onPageChange({ page, size }: PageParams) {
    this.userFacade.setParams({ page, size });
    this.load();
  }

  load() {
    const displayName = this.search;
    const filter = this.data.onlyRole
      ? { roles: this.data.onlyRole, displayName }
      : { displayName };

    this.userFacade.setFilter(filter);
    this.userFacade.load();
  }

  close(selected: MatListOption[]) {
    if (this.data.multiple) {
      this.ref.close(selected.map((item) => item.value));
    } else {
      this.ref.close(selected[0].value);
    }
  }
}
