import { CreateEvent, EventFormat } from '@devmx/shared-api-interfaces';
import { FormOption, TypedForm } from '@devmx/shared-ui-global/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export class CreateEventForm extends FormGroup<TypedForm<CreateEvent>> {
  formats: FormOption<EventFormat | ''>[] = [
    { value: 'in-person', viewValue: 'Presencial' },
    { value: 'online', viewValue: 'Online' },
    { value: 'mixed', viewValue: 'Híbrido' },
  ];

  constructor() {
    super({
      id: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      title: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      format: new FormControl('in-person', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      visible: new FormControl(false, {
        nonNullable: true,
      }),
    });
  }
}
