import { AccountRef, PresentationRef } from '../dtos';
import { ImageRef, Location } from '../interfaces';
import { EventFormat } from '../types';
import { City } from './city';

export interface Event {
  id: string;

  title: string;

  format: EventFormat;

  description?: string;

  date?: string;

  time?: string;

  cover?: ImageRef;

  visible: boolean;

  presentations?: PresentationRef[];

  leaders?: AccountRef[];

  address?: string;

  city?: City;

  location?: Location;
}
