import { FilterPresentation } from '@devmx/account-data-access';
import { FormControl, FormGroup } from '@angular/forms';
import { FormOption, TypedForm } from '@devmx/shared-ui-global';
import { PresentationFormat } from '@devmx/shared-api-interfaces';

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
      title: new FormControl('', {
        nonNullable: true,
      }),
      format: new FormControl('', {
        nonNullable: true,
      }),
    });
  }
}
