import { Event, EventOut, EventPage } from '@devmx/shared-api-interfaces';
import { durationTimeToMinutes } from '@devmx/shared-util-data';
import { addMinutes } from 'date-fns/addMinutes';

export function toEventPage(event: Event | EventOut): EventPage {
  const start = new Date(event.date ?? '');

  const durationInMinutes = durationTimeToMinutes(event.duration ?? '2h');

  const end = addMinutes(start, durationInMinutes);

  const values = event as EventOut;

  return { ...values, start, end };
}
