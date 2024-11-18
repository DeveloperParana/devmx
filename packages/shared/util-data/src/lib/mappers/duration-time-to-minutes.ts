import { DurationTime } from '@devmx/shared-api-interfaces';

export function durationTimeToMinutes<T extends DurationTime>(duration: T) {
  const [hour, minute] = duration.split(' e ');

  const hours = +hour.replace('h', '');

  const minutes = minute ? +minute.replace('m', '') : 0;

  return hours * 60 + minutes;
}
