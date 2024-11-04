import { TypedForm } from '@devmx/shared-ui-global/forms';
import { FormControl, FormGroup } from '@angular/forms';

export interface UserSearch {
  name: string;
  displayName: string;
}

export class UserSearchForm extends FormGroup<TypedForm<UserSearch>> {
  constructor() {
    super({
      name: new FormControl('', {
        nonNullable: true,
      }),
      displayName: new FormControl('', {
        nonNullable: true,
      }),
    });
  }
}
