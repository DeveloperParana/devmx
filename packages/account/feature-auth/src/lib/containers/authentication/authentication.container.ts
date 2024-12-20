import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { AuthenticationFacade } from '@devmx/account-data-access';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Validators, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CodeFieldComponent } from '@devmx/account-ui-shared';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthenticationForm } from '../../forms';
import { AsyncPipe } from '@angular/common';
import {
  inject,
  viewChild,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-authentication',
  templateUrl: './authentication.container.html',
  styleUrl: './authentication.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    CodeFieldComponent,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    RouterLink,
    AsyncPipe,
  ],
})
export class AuthenticationContainer {
  route = inject(ActivatedRoute);
  router = inject(Router);

  stepper = viewChild(MatStepper);

  authenticationFacade = inject(AuthenticationFacade);

  form = new AuthenticationForm();

  constructor() {
    this.authenticationFacade.connected$
      .pipe(takeUntilDestroyed())
      .subscribe((connected) => {
        const { redirectTo } = this.route.snapshot.queryParams;
        if (connected && redirectTo) this.router.navigateByUrl(redirectTo);
        else if (connected) this.router.navigate(['/']);
      });

    this.form.controls.code.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe((value) => {
        if (value.length === 4) {
          this.validateUserCode();
        }
      });
  }

  sendUserCode() {
    if (this.form.valid) {
      const value = this.form.getRawValue();
      this.authenticationFacade.sendUserCode(value);

      const validators = [Validators.required];
      this.form.controls.code.addValidators(validators);
    }
  }

  validateUserCode() {
    if (this.form.valid) {
      const value = this.form.getRawValue();
      this.authenticationFacade.validateUserCode(value);
    }
  }

  onAnimationDone(codeField: CodeFieldComponent, nameInput: HTMLInputElement) {
    const stepper = this.stepper();
    if (!stepper) return;

    switch (stepper.selectedIndex) {
      case 0:
        return nameInput.focus();
      case 1:
      default:
        return codeField.inputAElm?.focus();
    }
  }
}
