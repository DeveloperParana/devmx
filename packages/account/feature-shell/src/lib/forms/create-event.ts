import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateEvent } from '@devmx/shared-api-interfaces';
import { TypedForm } from '@devmx/shared-ui-global';

export class CreateEventForm extends FormGroup<TypedForm<CreateEvent>> {
  constructor() {
    super({
      title: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required
        ]
      }),
      format: new FormControl('mixed', {
        nonNullable: true,
        validators: [
          Validators.required
        ]
      }),
      visible: new FormControl(false, {
        nonNullable: true,
      }),
    });
  }
}
