import { TypedForm, FormOption } from '@devmx/shared-ui-global/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventPresentationsForm } from './event-presentation';
import { DURATION_TIMES } from '@devmx/shared-util-data';
import { EventLeadersForm } from './event-leader';
import { addDays } from 'date-fns/addDays';
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

  durations: FormOption<DurationTime>[] = DURATION_TIMES.map((value) => {
    return { value, viewValue: value };
  });

  static date = addDays(new Date(), 10);

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
        updateOn: 'blur',
      }),

      time: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
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

      format: new FormControl('', {
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

  onFormatChange(format = '') {
    if (format === 'in-person') {
      this.controls.address?.enable();
      this.controls.link?.disable();
    }

    if (format === 'online') {
      this.controls.address?.disable();
      this.controls.link?.enable();
    }

    if (format === 'mixed') {
      this.controls.link?.enable();
      this.controls.address?.enable();
    }
  }
}
