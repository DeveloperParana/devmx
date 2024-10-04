import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SignUp } from '@devmx/shared-api-interfaces';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpForm } from '../../forms';
import {
  output,
  viewChild,
  Component,
  ElementRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()],
  imports: [
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
  ],
  standalone: true,
})
export class SignUpComponent {
  firstNameRef = viewChild<ElementRef<HTMLInputElement>>('firstName');
  get firstName() {
    return this.firstNameRef()?.nativeElement;
  }

  form = new SignUpForm();

  submitted = output<SignUp>();

  usernameChange = output<string>();

  focus() {
    if (!this.firstName) return;
    this.firstName.focus();
  }

  onSubmit() {
    if (this.form.valid) {
      return this.submitted.emit(this.form.getRawValue() as SignUp);
    }

    this.form.markAllAsTouched();
  }
}
