import { PresentationOut } from './presentation-out';
import { AccountRef } from './account-ref';
import { Location } from '../interfaces';
import { EventFormat } from '../types';
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

  address: string;

  city?: City;

  location?: Location;

  owner: AccountRef
}
