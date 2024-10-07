import { FormControl, FormGroup } from '@angular/forms';
import { AccountRole } from '@devmx/shared-api-interfaces';
import { TypedForm } from '@devmx/shared-ui-global';

export class RolesForm extends FormGroup<TypedForm<AccountRole>> {
  constructor() {
    super({
      member: new FormControl(false, {
        nonNullable: true,
      }),
      speaker: new FormControl(false, {
        nonNullable: true,
      }),
      recruiter: new FormControl(false, {
        nonNullable: true,
      }),
      donor: new FormControl(false, {
        nonNullable: true,
      }),
      neighbor: new FormControl(false, {
        nonNullable: true,
      }),
      leader: new FormControl(false, {
        nonNullable: true,
      }),
      staff: new FormControl(false, {
        nonNullable: true,
      }),
      fellow: new FormControl(false, {
        nonNullable: true,
      }),
      manager: new FormControl(false, {
        nonNullable: true,
      }),
      director: new FormControl(false, {
        nonNullable: true,
      }),
    });

    this.controls.member.disable();
    this.controls.speaker.disable();
  }
}
