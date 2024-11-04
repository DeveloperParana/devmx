import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AutoAssignableRolesForm } from './auto-assignable-roles';
import { TypedForm } from '@devmx/shared-ui-global/forms';
import { CreateUser } from '@devmx/account-data-access';

export class CreateUserForm extends FormGroup<TypedForm<CreateUser>> {
  constructor() {
    super({
      name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.pattern(/^[a-z0-9]+$/)],
      }),
      displayName: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      roles: new AutoAssignableRolesForm(),
    });
  }
}
