import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EditableEvent, Event, EventFormat } from '@devmx/shared-api-interfaces';
import { EventPresentationsForm } from './event-presentation';
import { FormOption, ImageRefForm, TypedForm } from '@devmx/shared-ui-global/forms';
import { EventLeadersForm } from './event-leader';

export class EventForm extends FormGroup<TypedForm<EditableEvent>> {
  formats: FormOption<EventFormat>[] = [
    { value: 'in-person', viewValue: 'Presencial' },
    { value: 'mixed', viewValue: 'Híbrido' },
    { value: 'online', viewValue: 'Online' },
  ]

  times = [
    '00:00',
    '00:30',
    '01:00',
    '01:30',
    '02:00',
    '02:30',
    '03:00',
    '03:30',
    '04:00',
    '04:30',
    '05:00',
    '05:30',
    '06:00',
    '06:30',
    '07:00',
    '07:30',
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
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

      cover: new ImageRefForm(),

      presentations: new EventPresentationsForm(),

      leaders: new EventLeadersForm(),

      date: new FormControl('', {
        nonNullable: true,
      }),
      time: new FormControl('', {
        nonNullable: true,
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
