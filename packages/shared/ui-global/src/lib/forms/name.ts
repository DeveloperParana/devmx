import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Name } from '@devmx/shared-api-interfaces';
import { TypedForm } from '../types';

export class NameForm extends FormGroup<TypedForm<Name>> {
  constructor(name?: Name) {
    super({
      first: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      last: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });

    if (name) this.patchValue(name);
  }
}
