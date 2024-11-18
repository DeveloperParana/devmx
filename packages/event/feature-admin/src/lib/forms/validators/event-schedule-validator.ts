import { durationTimeToMinutes } from '@devmx/shared-util-data';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { EventPage } from '@devmx/shared-api-interfaces';

const reduceAllTimes = (slots: number, slot: number, interval = 0) => {
  const timeFactory = new Array(slots).fill(slot).join(`:${interval}:`);
  const allTimes = timeFactory.split(':').map((time) => +time);
  return allTimes.reduce((prev, next) => (prev += next), 0);
};

export function createEventScheduleValidator(
  eventPage: EventPage
): ValidatorFn {
  return (control: AbstractControl) => {
    const eachSlotControl = control.get('eachSlot');
    const intervalBetweenControl = control.get('intervalBetween');

    const duration = durationTimeToMinutes(eventPage.duration ?? '2h');

    const slots = eventPage.presentations.length;
    const eachSlot = eachSlotControl?.value ?? 0;
    const intervalBetween = intervalBetweenControl?.value ?? 0;

    const total = reduceAllTimes(slots, eachSlot, intervalBetween);

    if (total > duration) {
      return { totalGreaterThanDuration: { total, duration } };
    }

    return null;
  };
}
