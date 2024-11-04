import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { AuthenticationFacade } from '@devmx/account-data-access';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Validators, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CodeFieldComponent } from '@devmx/account-ui-shared';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';
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
    IconComponent,
    RouterLink,
    AsyncPipe,
  ],
  standalone: true,
})
export class AuthenticationContainer {
  stepper = viewChild(MatStepper);

  router = inject(Router);

  authenticationFacade = inject(AuthenticationFacade);

  form = new AuthenticationForm();

  constructor() {
    this.authenticationFacade.connected$
      .pipe(takeUntilDestroyed())
      .subscribe((connected) => {
        if (connected) this.router.navigate(['/']);
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

      const stepper = this.stepper();
      if (stepper) stepper.next();
    }
  }

  validateUserCode() {
    if (this.form.valid) {
      const value = this.form.getRawValue();
      this.authenticationFacade.validateUserCode(value);
    }
  }

  onInteract() {
    const stepper = this.stepper();
    const index = stepper?.selectedIndex;
    const valid = this.form.controls.name.valid;

    if (stepper && index == 1 && !valid) {
      stepper.previous();
    }
  }
}
