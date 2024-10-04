import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountRef } from '@devmx/shared-api-interfaces';
import { TypedForm } from '../types';
import { NameForm } from './name';

export class AccountRefForm extends FormGroup<TypedForm<AccountRef>> {
  get name() {
    return this.controls.name.value;
  }

  constructor(account?: AccountRef) {
    super({
      id: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      name: new NameForm(),
      username: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      photo: new FormControl('', {
        nonNullable: true,
      }),
    });

    if (account) this.patchValue(account);
  }
}
