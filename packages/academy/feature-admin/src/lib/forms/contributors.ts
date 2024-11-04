import { UserRefForm } from '@devmx/shared-ui-global/forms';
import { UserRef } from '@devmx/shared-api-interfaces';
import { FormArray } from '@angular/forms';

export class ContributorsForm extends FormArray<UserRefForm> {
  constructor() {
    super([]);
  }

  add(value?: UserRef) {
    this.push(new UserRefForm(value));
  }
}
