import { TypedForm } from '@devmx/shared-ui-global/forms';
import { FormControl, FormGroup } from '@angular/forms';

export interface InstitutionSearch {
  name: string;
}

export class InstitutionSearchForm extends FormGroup<
  TypedForm<InstitutionSearch>
> {
  constructor() {
    super({
      name: new FormControl('', {
        nonNullable: true,
      }),
    });
  }
}
