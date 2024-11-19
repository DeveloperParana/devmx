import { toEventAttendanceModeEnumeration } from './to-event-attendance-mode';
import { EventPage, EventPageSchema } from '@devmx/shared-api-interfaces';
import { markdownToText } from '@devmx/shared-util-data';

export function toEventSchema(event: EventPage): EventPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: markdownToText(event.description ?? ''),
    startDate: `${event.start}`,
    endDate: `${event.end}`,
    eventAttendanceMode: toEventAttendanceModeEnumeration(event.format),
    eventSchedule: [
      {
        '@type': 'Schedule',
      },
    ],
  };
}
