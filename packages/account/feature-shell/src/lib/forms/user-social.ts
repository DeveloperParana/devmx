import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { TypedForm } from '@devmx/shared-ui-global/forms';
import { UserSocial } from '@devmx/shared-api-interfaces';

export class UserSocialForm extends FormGroup<TypedForm<UserSocial>> {
  constructor(value?: UserSocial) {
    super({
      type: new FormControl('website', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      username: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });

    if (value) {
      this.patchValue(value);
    }
  }
}

export class UserSocialList extends FormArray<UserSocialForm> {
  constructor() {
    super([]);
  }

  add(value?: UserSocial) {
    this.push(new UserSocialForm(value));
  }
}
