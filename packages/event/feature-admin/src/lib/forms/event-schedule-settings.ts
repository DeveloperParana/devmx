import { FormGroup, Validators, FormControl } from '@angular/forms';
import { createEventScheduleValidator } from './validators';
import { TypedForm } from '@devmx/shared-ui-global/forms';
import { EventPage } from '@devmx/shared-api-interfaces';
import { durationTimeToMinutes } from '@devmx/shared-util-data';

export interface EventScheduleSettings {
  eachSlot: number;
  intervalBetween: number;
}

const initialEachSlot = (
  eventPage: EventPage,
  value?: EventScheduleSettings
) => {
  if (value) return value.eachSlot;

  const duration = durationTimeToMinutes(eventPage.duration ?? '2h');
  return duration / eventPage.presentations.length;
};

export class EventScheduleSettingsForm extends FormGroup<
  TypedForm<EventScheduleSettings>
> {
  constructor(eventPage: EventPage, value?: EventScheduleSettings) {
    super(
      {
        eachSlot: new FormControl(initialEachSlot(eventPage, value), {
          nonNullable: true,
          validators: [],
        }),
        intervalBetween: new FormControl(value ? value.intervalBetween : 0, {
          nonNullable: true,
          validators: [Validators.min(0)],
        }),
      },
      {
        validators: [createEventScheduleValidator(eventPage)],
      }
    );
  }
}
