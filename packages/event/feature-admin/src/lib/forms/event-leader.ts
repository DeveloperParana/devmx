import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NameForm, TypedForm } from '@devmx/shared-ui-global/forms';
import { AccountRef } from '@devmx/shared-api-interfaces';

export class EventLeaderForm extends FormGroup<TypedForm<AccountRef>> {
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

export class EventLeadersForm extends FormArray<EventLeaderForm> {
  constructor() {
    super([]);
  }

  add(value?: AccountRef) {
    this.push(new EventLeaderForm(value));
  }
}
