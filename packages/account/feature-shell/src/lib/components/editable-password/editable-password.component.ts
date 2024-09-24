import { MatFormFieldModule } from '@angular/material/form-field';
import { ChangePassword } from '@devmx/account-data-access';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PasswordForm } from '../../forms';
import {
  OnInit,
  output,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

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
export class EditablePasswordComponent implements OnInit {
  form = new PasswordForm();

  submitted = output<ChangePassword>();

  ngOnInit() {
    this.form.disable();
  }

  toggleForm(elementToFocus: HTMLInputElement) {
    if (this.form.disabled) {
      this.form.enable();
      elementToFocus.focus();
    } else {
      this.form.disable();
    }
  }

  onSubmit() {
    if (this.form.valid) {
      return this.submitted.emit(this.form.getRawValue());
    }

    this.form.markAllAsTouched();
  }
}
