import { AutocompleteCitiesComponent } from '@devmx/location-ui-forms';
import { ControlContainer, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { UpdateAccountForm } from '../../forms';
import {
  OnInit,
  inject,
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
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
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
  container = inject(ControlContainer);

  get form() {
    return this.container.control as UpdateAccountForm;
  }

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
}
