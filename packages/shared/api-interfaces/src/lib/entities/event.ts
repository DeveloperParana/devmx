import { UserRef, PresentationRef } from '../dtos';
import { Location } from '../interfaces';
import { DurationTime, EventFormat } from '../types';
import { City } from './city';

export interface Event {
  id: string;

  title: string;

  format: EventFormat;

  description?: string;

  date?: Date;

  time?: string;

  duration?: DurationTime

  maxAttendees?: number

  cover?: string;

  visible: boolean;

  presentations?: PresentationRef[];

  leaders?: UserRef[];

  link?: string;

  address?: string;

  city?: City;

  location?: Location;
}
