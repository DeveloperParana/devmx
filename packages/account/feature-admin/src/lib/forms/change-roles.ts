import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChangeRoles } from '@devmx/account-data-access';
import { TypedForm } from '@devmx/shared-ui-global';

export class ChangeRolesForm extends FormGroup<TypedForm<ChangeRoles>> {
  constructor() {
    super({
      id: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      roles: new FormGroup({
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
        member: new FormControl(false, {
          nonNullable: true,
        }),
        speaker: new FormControl(false, {
          nonNullable: true,
        }),
      }),
    });
  }

  get roles() {
    return this.controls.roles;
  }

  disableBoard() {
    this.roles.controls.director.disable();
    this.roles.controls.manager.disable();
  }

  disableWorthy() {
    this.roles.controls.fellow.disable();
    this.roles.controls.leader.disable();
    this.roles.controls.staff.disable();
  }
}
