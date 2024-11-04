import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UpdatePassword } from '@devmx/account-data-access';
import { TypedForm } from '@devmx/shared-ui-global/forms';

export class UpdatePasswordForm extends FormGroup<TypedForm<UpdatePassword>> {
  constructor() {
    super({
      id: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      code: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(6)],
      }),
    });
  }

  getPassword() {
    return this.getRawValue();
  }
}
