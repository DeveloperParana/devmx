import { PresentationOut } from './presentation-out';
import { DurationTime, EventFormat } from '../types';
import { Location } from '../interfaces';
import { City, User } from '../entities';

export type LeaderRef = Pick<User, 'displayName' | 'name' | 'profile' | 'id'>;

export interface EventOut {
  id: string;

  title: string;

  description: string;

  format: EventFormat;

  date: string;

  time: string;

  duration?: DurationTime;

  maxAttendees?: number;

  cover: string;

  visible: boolean;

  presentations: PresentationOut[];

  leaders: LeaderRef[];

  address: string;

  link?: string;

  city?: City;

  location?: Location;

  owner: LeaderRef;
}
