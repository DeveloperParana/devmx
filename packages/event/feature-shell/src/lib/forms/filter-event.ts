import { FormOption, TypedForm } from '@devmx/shared-ui-global/forms';
import { EventFormat } from '@devmx/shared-api-interfaces';
import { FormControl, FormGroup } from '@angular/forms';
import { FilterEvent } from '@devmx/event-data-access';

export class FilterEventForm extends FormGroup<TypedForm<FilterEvent>> {
  formats: FormOption<EventFormat | ''>[] = [
    { value: '', viewValue: 'Todos' },
    { value: 'in-person', viewValue: 'Presencial' },
    { value: 'online', viewValue: 'Online' },
    { value: 'mixed', viewValue: 'Híbrido' },
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
