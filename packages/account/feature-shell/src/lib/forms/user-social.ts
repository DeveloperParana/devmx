import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { TypedForm } from '@devmx/shared-ui-global/forms';
import { UserSocial, UserSocialType } from '@devmx/shared-api-interfaces';

export class UserSocialItemForm extends FormGroup<TypedForm<UserSocial>> {
  constructor(value?: Partial<UserSocial>) {
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

export class UserSocialForm extends FormArray<UserSocialItemForm> {
  constructor() {
    super([]);
  }

  add(value?: UserSocial) {
    this.push(new UserSocialItemForm(value));
  }

  has(type?: UserSocialType) {
    return this.value.some((item) => item.type === type);
  }

  override patchValue(
    value: Partial<UserSocial>[],
    options?: { onlySelf?: boolean; emitEvent?: boolean }
  ): void {
    for (const item of value) {
      if (!this.has(item.type)) {
        this.push(new UserSocialItemForm(item), options);
      }
    }
  }
}
