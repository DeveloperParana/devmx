import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChangePassword } from '@devmx/account-data-access';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordForm } from '../../forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'devmx-editable-password',
  templateUrl: './editable-password.component.html',
  styleUrl: './editable-password.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  standalone: true,
})
export class EditablePasswordComponent {
  form = new PasswordForm();

  submitted = output<ChangePassword>();

  onSubmit() {
    if (this.form.valid) {
      return this.submitted.emit(this.form.getRawValue());
    }

    this.form.markAllAsTouched();
  }
}
