import { AccountRefForm } from '@devmx/shared-ui-global/forms';
import { AccountRef } from '@devmx/shared-api-interfaces';
import { FormArray } from '@angular/forms';

export class ContributorsForm extends FormArray<AccountRefForm> {
  constructor() {
    super([]);
  }

  add(value?: AccountRef) {
    this.push(new AccountRefForm(value));
  }
}
