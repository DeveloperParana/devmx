import { Presentation } from './presentation';
import { Location } from '../interfaces';
import { EventFormat } from '../types';
import { City } from './city';

export interface Event {
  id: string;

  title: string;

  description: string;

  format: EventFormat;

  date: string;

  time: string;

  cover: string;

  visible: boolean;

  presentations: Presentation[];

  address: string;

  city?: City;

  location?: Location;
}
