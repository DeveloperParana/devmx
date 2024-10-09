import { FilterAccount } from '@devmx/account-data-access';
import { TypedForm } from '@devmx/shared-ui-global/forms';
import { FormControl, FormGroup } from '@angular/forms';

export class FilterAccountForm extends FormGroup<TypedForm<FilterAccount>> {
  constructor() {
    super({
      name: new FormControl('', {
        nonNullable: true,
      }),
      username: new FormControl('', {
        nonNullable: true,
      }),
    });
  }
}
