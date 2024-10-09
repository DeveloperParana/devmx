import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FormGroupComponent } from '../../components';
import { TypedFields, TypedForm } from '../../types';
import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

export interface FormDialogData<T> {
  title: string;
  fields: TypedFields<T>;
  form: FormGroup<TypedForm<T>>;
}

@Component({
  selector: 'devmx-form',
  templateUrl: './form.dialog.html',
  styleUrl: './form.dialog.scss',
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    FormGroupComponent,
  ],
  standalone: true,
})
export class FormDialog<T = unknown> {
  ref = inject<MatDialogRef<FormDialog<T>, T>>(MatDialogRef);

  data = inject<FormDialogData<T>>(MAT_DIALOG_DATA);

  onSubmit() {
    if (this.data.form.valid) {
      const value = this.data.form.getRawValue();
      return this.ref.close(value as T);
    }

    console.log(this.data.form.errors);

    this.data.form.markAllAsTouched();
  }
}
