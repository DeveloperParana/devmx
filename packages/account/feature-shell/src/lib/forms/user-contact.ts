import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserContact } from '@devmx/shared-api-interfaces';
import {
  TypedForm,
  invalidPhoneValidator,
} from '@devmx/shared-ui-global/forms';

export class UserContactForm extends FormGroup<TypedForm<UserContact>> {
  constructor() {
    super({
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      phone: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.maxLength(15),
          invalidPhoneValidator(/^\(\d{2}\) \d{4,5}-\d{4}$/),
        ],
      }),
    });
  }
}
