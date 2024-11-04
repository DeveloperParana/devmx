import { PresentationOut } from './presentation-out';
import { Location } from '../interfaces';
import { EventFormat } from '../types';
import { UserRef } from './user-ref';
import { City } from '../entities';

export interface EventOut {
  id: string;

  title: string;

  description: string;

  format: EventFormat;

  date: string;

  time: string;

  cover: string;

  visible: boolean;

  presentations: PresentationOut[];

  leaders: UserRef[];

  address: string;

  city?: City;

  location?: Location;

  owner: UserRef;
}
