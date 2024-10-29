import { PresentationFormat } from '@devmx/shared-api-interfaces';
import { TypedForm } from '@devmx/shared-ui-global/forms';
import { FormControl, FormGroup } from '@angular/forms';

export interface PresentationFilter {
  title: string;
  format: PresentationFormat;
}

export class PresentationFilterForm extends FormGroup<
  TypedForm<PresentationFilter>
> {
  constructor() {
    super({
      title: new FormControl('', {
        nonNullable: true,
      }),
      format: new FormControl('talk', {
        nonNullable: true,
      }),
    });
  }
}
