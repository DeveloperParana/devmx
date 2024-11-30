import { UserVisibility } from '@devmx/shared-api-interfaces';
import { TypedForm } from '@devmx/shared-ui-global/forms';
import { FormControl, FormGroup } from '@angular/forms';

export class UserVisibilityForm extends FormGroup<TypedForm<UserVisibility>> {
  constructor() {
    super({
      email: new FormControl(false, {
        nonNullable: true,
      }),
      phone: new FormControl(false, {
        nonNullable: true,
      }),
      birthday: new FormControl(false, {
        nonNullable: true,
      }),
      gender: new FormControl(false, {
        nonNullable: true,
      }),
      roles: new FormControl(false, {
        nonNullable: true,
      }),
      events: new FormControl(false, {
        nonNullable: true,
      }),
      photos: new FormControl(false, {
        nonNullable: true,
      }),
      presentations: new FormControl(false, {
        nonNullable: true,
      }),
      skills: new FormControl(false, {
        nonNullable: true,
      }),
    });
  }
}
