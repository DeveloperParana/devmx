import { TypedForm } from '@devmx/shared-ui-global/forms';
import { Roles } from '@devmx/shared-api-interfaces';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export class UserRolesForm extends FormGroup<TypedForm<Roles>> {
  constructor() {
    super({
      academic: new FormControl(false, {
        nonNullable: true,
      }),
      director: new FormControl(
        { value: false, disabled: true },
        { nonNullable: true }
      ),
      donor: new FormControl(
        { value: false, disabled: true },
        { nonNullable: true }
      ),
      fellow: new FormControl(
        { value: false, disabled: true },
        { nonNullable: true }
      ),
      leader: new FormControl(
        { value: false, disabled: true },
        { nonNullable: true }
      ),
      manager: new FormControl(
        { value: false, disabled: true },
        { nonNullable: true }
      ),
      member: new FormControl(false, {
        nonNullable: true,
        validators: [Validators.requiredTrue],
      }),
      neighbor: new FormControl(
        { value: false, disabled: true },
        { nonNullable: true }
      ),
      recruiter: new FormControl(false, {
        nonNullable: true,
      }),
      speaker: new FormControl(false, {
        nonNullable: true,
      }),
      staff: new FormControl(
        { value: false, disabled: true },
        { nonNullable: true }
      ),
    });
  }
}
