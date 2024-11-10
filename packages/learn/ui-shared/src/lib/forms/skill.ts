import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EditableSkill } from '@devmx/shared-api-interfaces';
import { TypedForm } from '@devmx/shared-ui-global/forms';

export class SkillForm extends FormGroup<TypedForm<EditableSkill>> {
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
