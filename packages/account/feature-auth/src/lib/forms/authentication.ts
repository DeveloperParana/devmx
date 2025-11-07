import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateUserCode } from '@devmx/account-data-access';
import { TypedForm } from '@devmx/shared-ui-global/forms';

/**
 * Custom validator that accepts either a username (lowercase alphanumeric) or an email
 */
function usernameOrEmailValidator(control: FormControl) {
  const value = control.value;
  if (!value) return null;

  const isEmail = value.includes('@');
  if (isEmail) {
    // Use simple email validation (same as Validators.email)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(value) ? null : { invalidEmailOrUsername: true };
  } else {
    // Username pattern (lowercase alphanumeric)
    const usernamePattern = /^[a-z0-9]+$/;
    return usernamePattern.test(value) ? null : { invalidEmailOrUsername: true };
  }
}

export class AuthenticationForm extends FormGroup<TypedForm<ValidateUserCode>> {
  constructor() {
    super({
      name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, usernameOrEmailValidator],
      }),
      code: new FormControl('', {
        nonNullable: true,
      }),
    });
  }
}
