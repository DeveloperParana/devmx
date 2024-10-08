import { AutocompleteCitiesComponent } from '@devmx/location-ui-forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { UpdateAccount } from '@devmx/account-data-access';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateAccountForm, UpdateAccountWithCity } from '../../forms';
import {
  output,
  OnInit,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-editable-account',
  exportAs: 'devmxEditableAccount',
  templateUrl: './editable-account.component.html',
  styleUrl: './editable-account.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()],
  imports: [
    ReactiveFormsModule,
    AutocompleteCitiesComponent,
    MatDatepickerModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
  ],
  standalone: true,
})
export class EditableAccountComponent implements OnInit {
  form = new UpdateAccountForm();

  submitted = output<UpdateAccount | UpdateAccountWithCity>();

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
      this.submitted.emit(this.form.getRawValue() as UpdateAccount);
      return this.form.disable();
    }

    this.form.markAllAsTouched();
  }
}
