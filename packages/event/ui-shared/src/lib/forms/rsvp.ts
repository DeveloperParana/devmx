import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateRSVP } from '@devmx/shared-api-interfaces/client';
import { TypedForm } from '@devmx/shared-ui-global/forms';

export class RSVPForm extends FormGroup<TypedForm<CreateRSVP>> {
  constructor() {
    super({
      event: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      status: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });
  }
}
