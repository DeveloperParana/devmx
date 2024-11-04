import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateUserCode } from '@devmx/account-data-access';
import { TypedForm } from '@devmx/shared-ui-global/forms';

export class AuthenticationForm extends FormGroup<TypedForm<ValidateUserCode>> {
  constructor() {
    super({
      name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.pattern(/^[a-z0-9]+$/)],
      }),
      code: new FormControl('', {
        nonNullable: true,
      }),
    });
  }
}
