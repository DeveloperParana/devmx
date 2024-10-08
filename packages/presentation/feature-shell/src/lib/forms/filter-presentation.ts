import { FilterPresentation } from '@devmx/presentation-data-access';
import { FormControl, FormGroup } from '@angular/forms';
import { TypedForm } from '@devmx/shared-ui-global';

export class FilterPresentationForm extends FormGroup<
  TypedForm<FilterPresentation>
> {
  constructor() {
    super({
      format: new FormControl('', {
        nonNullable: true,
      }),
      title: new FormControl('', {
        nonNullable: true,
      }),
    });
  }
}
