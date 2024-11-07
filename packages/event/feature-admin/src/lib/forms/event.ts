import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventPresentationsForm } from './event-presentation';
import { TypedForm, FormOption } from '@devmx/shared-ui-global/forms';
import { EventLeadersForm } from './event-leader';
import {
  Event,
  EventFormat,
  EditableEvent,
} from '@devmx/shared-api-interfaces';

export class EventForm extends FormGroup<TypedForm<EditableEvent>> {
  formats: FormOption<EventFormat>[] = [
    { value: 'in-person', viewValue: 'Presencial' },
    { value: 'mixed', viewValue: 'Híbrido' },
    { value: 'online', viewValue: 'Online' },
  ];

  constructor() {
    super({
      id: new FormControl('', {
        nonNullable: true,
      }),
      title: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      description: new FormControl('', {
        nonNullable: true,
      }),
      format: new FormControl('in-person', {
        nonNullable: true,
      }),

      presentations: new EventPresentationsForm(),

      leaders: new EventLeadersForm(),

      date: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      time: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      address: new FormControl('', {
        nonNullable: true,
      }),
      visible: new FormControl(true, {
        nonNullable: true,
      }),
    });
  }

  get presentations() {
    return this.controls.presentations as EventPresentationsForm;
  }

  get leaders() {
    return this.controls.leaders as EventLeadersForm;
  }

  patch(value: Event) {
    this.patchValue(value);

    if (value.presentations) {
      this.presentations.clear();

      for (const skill of value.presentations) {
        this.presentations.add(skill);
      }
    }

    if (value.leaders) {
      this.leaders.clear();

      for (const skill of value.leaders) {
        this.leaders.add(skill);
      }
    }
  }
}
