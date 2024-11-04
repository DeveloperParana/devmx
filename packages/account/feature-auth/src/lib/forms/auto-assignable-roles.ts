import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AutoAssignableRoles } from '@devmx/shared-api-interfaces';
import { TypedForm } from '@devmx/shared-ui-global/forms';

export class AutoAssignableRolesForm extends FormGroup<
  TypedForm<AutoAssignableRoles>
> {
  constructor() {
    super({
      member: new FormControl(true, {
        nonNullable: true,
        validators: [Validators.requiredTrue],
      }),
      academic: new FormControl(false, {
        nonNullable: true,
      }),
      recruiter: new FormControl(false, {
        nonNullable: true,
      }),
      speaker: new FormControl(false, {
        nonNullable: true,
      }),
    });
  }
}
