import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SignIn } from '@devmx/shared-api-interfaces';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInForm } from '../../forms';
import {
  output,
  Component,
  viewChild,
  ElementRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  standalone: true,
})
export class SignInComponent {
  usernameRef = viewChild<ElementRef<HTMLInputElement>>('username');
  get username() {
    return this.usernameRef()?.nativeElement;
  }

  form = new SignInForm();

  submitted = output<SignIn>();

  focus() {
    if (!this.username) return;
    this.username.focus();
  }

  onSubmit() {
    if (this.form.valid) {
      return this.submitted.emit(this.form.getRawValue());
    }

    this.form.markAllAsTouched();
  }
}
