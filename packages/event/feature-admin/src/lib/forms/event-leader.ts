import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { TypedForm } from '@devmx/shared-ui-global/forms';
import { UserRef } from '@devmx/shared-api-interfaces';

export class EventLeaderForm extends FormGroup<TypedForm<UserRef>> {
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
        nonNullable: true,
        validators: [Validators.required],
      }),
      displayName: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });

    if (account) this.patchValue(account);
  }
}

export class EventLeadersForm extends FormArray<EventLeaderForm> {
  constructor() {
    super([]);
  }

  add(value?: UserRef) {
    this.push(new EventLeaderForm(value));
  }
}
