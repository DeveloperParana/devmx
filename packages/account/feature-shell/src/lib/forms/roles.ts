import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountRole } from '@devmx/shared-api-interfaces';
import { TypedForm } from '@devmx/shared-ui-global/forms';

export class RolesForm extends FormGroup<TypedForm<AccountRole>> {
  constructor() {
    super({
      member: new FormControl(
        { value: true, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.requiredTrue],
        }
      ),
      speaker: new FormControl(false, {
        nonNullable: true,
      }),
      recruiter: new FormControl(false, {
        nonNullable: true,
      }),
      leader: new FormControl(false, {
        nonNullable: true,
      }),
      staff: new FormControl(false, {
        nonNullable: true,
      }),
      donor: new FormControl(false, {
        nonNullable: true,
      }),
      director: new FormControl(
        { value: false, disabled: true },
        { nonNullable: true }
      ),
      fellow: new FormControl(
        { value: false, disabled: true },
        { nonNullable: true }
      ),
      manager: new FormControl(
        { value: false, disabled: true },
        { nonNullable: true }
      ),
      neighbor: new FormControl(
        { value: false, disabled: true },
        { nonNullable: true }
      ),
    });
  }
}
