import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventPresentationsForm } from './event-presentation';
import { EventLeadersForm } from './event-leader';
import { addDays } from 'date-fns/addDays';
import {
  TypedForm,
  FormOption,
  invalidTimeValidator,
} from '@devmx/shared-ui-global/forms';
import {
  Event,
  EventFormat,
  EditableEvent,
  DurationTime,
} from '@devmx/shared-api-interfaces';

export class EventForm extends FormGroup<TypedForm<EditableEvent>> {
  formats: FormOption<EventFormat>[] = [
    { value: 'in-person', viewValue: 'Presencial' },
    { value: 'mixed', viewValue: 'Híbrido' },
    { value: 'online', viewValue: 'Online' },
  ];

  durations: FormOption<DurationTime>[] = [
    { value: '10m', viewValue: '10m' },
    { value: '20m', viewValue: '20m' },
    { value: '30m', viewValue: '30m' },
    { value: '40m', viewValue: '40m' },
    { value: '50m', viewValue: '50m' },

    { value: '1h', viewValue: '1h' },
    { value: '1h e 10m', viewValue: '1h e 10m' },
    { value: '1h e 20m', viewValue: '1h e 20m' },
    { value: '1h e 30m', viewValue: '1h e 30m' },
    { value: '1h e 40m', viewValue: '1h e 40m' },
    { value: '1h e 50m', viewValue: '1h e 50m' },

    { value: '2h', viewValue: '2h' },
    { value: '2h e 10m', viewValue: '2h e 10m' },
    { value: '2h e 20m', viewValue: '2h e 20m' },
    { value: '2h e 30m', viewValue: '2h e 30m' },
    { value: '2h e 40m', viewValue: '2h e 40m' },
    { value: '2h e 50m', viewValue: '2h e 50m' },

    { value: '3h', viewValue: '3h' },
    { value: '3h e 10m', viewValue: '3h e 10m' },
    { value: '3h e 20m', viewValue: '3h e 20m' },
    { value: '3h e 30m', viewValue: '3h e 30m' },
    { value: '3h e 40m', viewValue: '3h e 40m' },
    { value: '3h e 50m', viewValue: '3h e 50m' },

    { value: '4h', viewValue: '4h' },
    { value: '4h e 10m', viewValue: '4h e 10m' },
    { value: '4h e 20m', viewValue: '4h e 20m' },
    { value: '4h e 30m', viewValue: '4h e 30m' },
    { value: '4h e 40m', viewValue: '4h e 40m' },
    { value: '4h e 50m', viewValue: '4h e 50m' },

    { value: '5h', viewValue: '5h' },
    { value: '5h e 10m', viewValue: '5h e 10m' },
    { value: '5h e 20m', viewValue: '5h e 20m' },
    { value: '5h e 30m', viewValue: '5h e 30m' },
    { value: '5h e 40m', viewValue: '5h e 40m' },
    { value: '5h e 50m', viewValue: '5h e 50m' },

    { value: '6h', viewValue: '6h' },
    { value: '6h e 10m', viewValue: '6h e 10m' },
    { value: '6h e 20m', viewValue: '6h e 20m' },
    { value: '6h e 30m', viewValue: '6h e 30m' },
    { value: '6h e 40m', viewValue: '6h e 40m' },
    { value: '6h e 50m', viewValue: '6h e 50m' },

    { value: '7h', viewValue: '7h' },
    { value: '7h e 10m', viewValue: '7h e 10m' },
    { value: '7h e 20m', viewValue: '7h e 20m' },
    { value: '7h e 30m', viewValue: '7h e 30m' },
    { value: '7h e 40m', viewValue: '7h e 40m' },
    { value: '7h e 50m', viewValue: '7h e 50m' },

    { value: '8h', viewValue: '8h' },
    { value: '8h e 10m', viewValue: '8h e 10m' },
    { value: '8h e 20m', viewValue: '8h e 20m' },
    { value: '8h e 30m', viewValue: '8h e 30m' },
    { value: '8h e 40m', viewValue: '8h e 40m' },
    { value: '8h e 50m', viewValue: '8h e 50m' },

    { value: '9h', viewValue: '9h' },
    { value: '9h e 10m', viewValue: '9h e 10m' },
    { value: '9h e 20m', viewValue: '9h e 20m' },
    { value: '9h e 30m', viewValue: '9h e 30m' },
    { value: '9h e 40m', viewValue: '9h e 40m' },
    { value: '9h e 50m', viewValue: '9h e 50m' },
  ];

  private static date = addDays(new Date(), 10);

  constructor() {
    super({
      id: new FormControl('', {
        nonNullable: true,
      }),

      title: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),

      date: new FormControl(EventForm.date, {
        nonNullable: true,
        validators: [Validators.required],
      }),

      time: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required,
          invalidTimeValidator(/^([01]\d|2[0-3]):[0-5]\d$/),
        ],
      }),

      duration: new FormControl('2h', {
        nonNullable: true,
      }),

      maxAttendees: new FormControl(0, {
        nonNullable: true,
      }),

      description: new FormControl('', {
        nonNullable: true,
      }),

      presentations: new EventPresentationsForm(),

      leaders: new EventLeadersForm(),

      format: new FormControl('in-person', {
        nonNullable: true,
      }),

      address: new FormControl('', {
        nonNullable: true,
      }),

      link: new FormControl('', {
        nonNullable: true,
      }),

      visible: new FormControl(true, {
        nonNullable: true,
      }),
    });

    this.controls.link?.disable();
  }

  get format() {
    return this.controls.format;
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
