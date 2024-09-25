import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AutoAssignableRole } from '@devmx/shared-api-interfaces';
import { Form } from '@devmx/shared-ui-global';

export interface AutoAssignable {
  id: string;
  roles: Record<AutoAssignableRole, boolean>;
}

export class AutoAssinableRoleForm extends Form<AutoAssignable> {
  constructor(value?: AutoAssignable) {
    super({
      id: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      roles: new FormGroup({
        member: new FormControl(),
        speaker: new FormControl(),
      }),
    });

    if (value) {
      this.patchValue(value);
    }
  }
}
