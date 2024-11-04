import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UpdateRoles } from '@devmx/shared-api-interfaces';
import { TypedForm } from '@devmx/shared-ui-global/forms';

export class UserRolesForm extends FormGroup<TypedForm<UpdateRoles>> {
  constructor() {
    super({
      id: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      roles: new FormGroup({
        academic: new FormControl(false, {
          nonNullable: true,
        }),
        director: new FormControl(false, {
          nonNullable: true,
        }),
        donor: new FormControl(false, {
          nonNullable: true,
        }),
        fellow: new FormControl(false, {
          nonNullable: true,
        }),
        leader: new FormControl(false, {
          nonNullable: true,
        }),
        manager: new FormControl(false, {
          nonNullable: true,
        }),
        member: new FormControl(false, {
          nonNullable: true,
          validators: [Validators.requiredTrue],
        }),
        neighbor: new FormControl(false, {
          nonNullable: true,
        }),
        recruiter: new FormControl(false, {
          nonNullable: true,
        }),
        speaker: new FormControl(false, {
          nonNullable: true,
        }),
        staff: new FormControl(false, {
          nonNullable: true,
        }),
      }),
    });
  }
}
