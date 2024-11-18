import { EventAttendanceModeEnumeration } from 'schema-dts';
import { EventFormat } from '@devmx/shared-api-interfaces';

export const toEventAttendanceModeEnumeration = (
  eventFormat: EventFormat
): EventAttendanceModeEnumeration => {
  switch (eventFormat) {
    case 'in-person':
      return 'OfflineEventAttendanceMode';
    case 'online':
      return 'OnlineEventAttendanceMode';
    case 'mixed':
    default:
      return 'MixedEventAttendanceMode';
  }
};
