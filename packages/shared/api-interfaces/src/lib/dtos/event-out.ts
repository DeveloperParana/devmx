import { PresentationOut } from './presentation-out';
import { AccountRef } from './account-ref';
import { ImageRef, Location } from '../interfaces';
import { EventFormat } from '../types';
import { City } from '../entities';

export interface EventOut {
  id: string;

  title: string;

  description: string;

  format: EventFormat;

  date: string;

  time: string;

  cover: ImageRef;

  visible: boolean;

  presentations: PresentationOut[];

  leaders: AccountRef[];

  address: string;

  city?: City;

  location?: Location;

  owner: AccountRef;
}
