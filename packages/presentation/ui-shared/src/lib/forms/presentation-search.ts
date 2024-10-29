import { FormControl, FormGroup } from '@angular/forms';
import { Presentation, PresentationFormat } from '@devmx/shared-api-interfaces';
import { FormOption, TypedForm } from '@devmx/shared-ui-global/forms';

export type PresentationSearch = Pick<Presentation, 'title' | 'format'>;

export class PresentationSearchForm extends FormGroup<
  TypedForm<PresentationSearch>
> {
  formats: FormOption<PresentationFormat>[] = [
    { value: 'talk', viewValue: 'Palestra' },
    { value: 'workshop', viewValue: 'Oficina' },
    { value: 'webinar', viewValue: 'Seminário online' },
  ];

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
