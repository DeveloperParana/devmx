import { PresentationOut } from './presentation-out';
import { Location } from '../interfaces';
import { City, User } from '../entities';
import { EventFormat } from '../types';

export type LeaderRef = Pick<User, 'displayName' | 'name' | 'profile' | 'id'>;


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

  leaders: LeaderRef[];

  address: string;

  city?: City;

  location?: Location;

  owner: LeaderRef;
}
