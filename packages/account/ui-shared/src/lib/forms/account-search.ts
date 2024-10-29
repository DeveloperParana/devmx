import { TypedForm } from '@devmx/shared-ui-global/forms';
import { FormControl, FormGroup } from '@angular/forms';

export interface AccountSearch {
  name: string;
  username: string;
}

export class AccountSearchForm extends FormGroup<TypedForm<AccountSearch>> {
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
