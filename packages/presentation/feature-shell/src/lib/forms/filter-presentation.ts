import { FilterPresentation } from '@devmx/presentation-data-access';
import { TypedForm } from '@devmx/shared-ui-global/forms';
import { FormControl, FormGroup } from '@angular/forms';

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
