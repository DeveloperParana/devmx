import { Validators, FormControl, AbstractControl } from '@angular/forms';
import { ChangePassword } from '@devmx/account-data-access';
import { Form } from '@devmx/shared-ui-global/forms';

function samePasswordsValidation(control: AbstractControl) {
  const currentPassword = control.get('currentPassword')?.value;
  const newPassword = control.get('newPassword')?.value;

  const isSame =
    currentPassword && newPassword && currentPassword === newPassword;

  return isSame ? { samePasswords: true } : null;
}

export class PasswordForm extends Form<ChangePassword> {
  constructor() {
    super(
      {
        id: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required],
        }),
        username: new FormControl('', { nonNullable: true }),
        currentPassword: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required, Validators.minLength(6)],
        }),
        newPassword: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required, Validators.minLength(6)],
        }),
      },
      { updateOn: 'blur', validators: samePasswordsValidation }
    );
  }
}
