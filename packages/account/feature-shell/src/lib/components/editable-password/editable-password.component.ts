import { MatFormFieldModule } from '@angular/material/form-field';
import { ChangePassword } from '@devmx/account-data-access';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PasswordForm } from '../../forms';
import {
  OnInit,
  output,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';
import { IconComponent } from '@devmx/shared-ui-global/icon';

@Component({
  selector: 'devmx-editable-password',
  exportAs: 'devmxEditablePassword',
  templateUrl: './editable-password.component.html',
  styleUrl: './editable-password.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    IconComponent,
    MatButtonModule,
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
      this.disable();
    }
  }

  disable() {
    if (this.form.enabled) {
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
