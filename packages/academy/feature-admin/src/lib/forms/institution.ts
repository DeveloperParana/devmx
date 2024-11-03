import { Institution, EditableInstitution } from '@devmx/shared-api-interfaces';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TypedForm } from '@devmx/shared-ui-global/forms';

export class InstitutionForm extends FormGroup<TypedForm<EditableInstitution>> {
  constructor() {
    super({
      id: new FormControl('', {
        nonNullable: true,
      }),
      name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });
  }

  patch(value: Institution) {
    this.patchValue(value);
  }
}
