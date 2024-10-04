import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UpdateEvent } from '@devmx/shared-api-interfaces';
import { TypedForm } from '@devmx/shared-ui-global';

export class UpdateEventForm extends FormGroup<TypedForm<UpdateEvent>> {
  constructor() {
    super({
      id: new FormControl('', {
        nonNullable: true,
      }),

      title: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),

      format: new FormControl('mixed', {
        nonNullable: true,
        validators: [Validators.required],
      }),

      visible: new FormControl(false, {
        nonNullable: true,
      }),

      address: new FormControl('', {
        nonNullable: true
      }),

      city: new FormControl(),

      cover: new FormControl(),

      date: new FormControl(),

      description: new FormControl(),

      location: new FormControl(),

      presentations: new FormControl(),

      time: new FormControl(),
    });
  }
}
