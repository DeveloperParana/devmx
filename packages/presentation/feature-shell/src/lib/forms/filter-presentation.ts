import { FilterPresentation } from '@devmx/presentation-data-access';
import { PresentationFormat } from '@devmx/shared-api-interfaces';
import { FormOption, TypedForm } from '@devmx/shared-ui-global';
import { FormControl, FormGroup } from '@angular/forms';

export class FilterPresentationForm extends FormGroup<
  TypedForm<FilterPresentation>
> {
  formats: FormOption<PresentationFormat | ''>[] = [
    { value: '', viewValue: 'Todos' },
    { value: 'talk', viewValue: 'Palestra' },
    { value: 'workshop', viewValue: 'Oficina (workshop)' },
    { value: 'webinar', viewValue: 'Seminário online (webinar)' },
  ];

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
