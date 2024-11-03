import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EditableSubject } from '@devmx/shared-api-interfaces';
import { TypedForm } from '@devmx/shared-ui-global/forms';

export class SubjectForm extends FormGroup<TypedForm<EditableSubject>> {
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
}
