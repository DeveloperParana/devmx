import { UserRef, PresentationRef } from '../dtos';
import { Location } from '../interfaces';
import { EventFormat } from '../types';
import { City } from './city';

export interface Event {
  id: string;

  title: string;

  format: EventFormat;

  description?: string;

  date?: string;

  time?: string;

  cover?: string;

  visible: boolean;

  presentations?: PresentationRef[];

  leaders?: UserRef[];

  address?: string;

  city?: City;

  location?: Location;
}
