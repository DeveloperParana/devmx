import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRef } from '@devmx/shared-api-interfaces';
import { TypedForm } from '../types';

export class UserRefForm extends FormGroup<TypedForm<UserRef>> {
  get name() {
    return this.controls.name.value;
  }

  constructor(account?: UserRef) {
    super({
      id: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      name: new FormControl('', {
        nonNullable: true
      }),
      displayName: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });

    if (account) this.patchValue(account);
  }
}
