import { MatCheckboxModule } from '@angular/material/checkbox';
import { ChangeRolesOptions } from './change-roles-options';
import { MatButtonModule } from '@angular/material/button';
import { Component, inject, OnInit } from '@angular/core';
import { ChangeRoles } from '@devmx/account-data-access';
import { MatListModule } from '@angular/material/list';
import { AccountLevel } from '@devmx/shared-util-data';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangeRolesForm } from '../../forms';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'devmx-change-roles',
  templateUrl: './change-roles.dialog.html',
  styleUrl: './change-roles.dialog.scss',
  imports: [
    ReactiveFormsModule,
    MatCheckboxModule,
    MatDialogActions,
    MatDialogContent,
    MatButtonModule,
    MatDialogTitle,
    MatDialogClose,
    MatListModule,
  ],
  standalone: true,
})
export class ChangeRolesDialog implements OnInit {
  editableRolesRef = inject(MatDialogRef<ChangeRolesDialog, ChangeRoles>);

  data: ChangeRolesOptions = inject(MAT_DIALOG_DATA);

  form = new ChangeRolesForm();

  ngOnInit() {
    console.log(this.data);
    const { assign, assigner } = this.data;

    const account = new AccountLevel(assigner);

    if (account.level < 4) {
      this.form.disableWorthy();
      this.form.disableBoard();
    }

    this.form.patchValue(assign);
  }

  onSubmit() {
    if (this.form.valid) {
      return this.editableRolesRef.close(this.form.getRawValue());
    }

    this.form.markAllAsTouched();
  }
}
