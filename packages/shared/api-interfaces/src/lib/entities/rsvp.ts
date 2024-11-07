import { RSVPStatus } from '../types';
import { EventRef } from '../dtos';
import { User } from './user';

export type UserRSVPRef = Pick<User, 'displayName' | 'name' | 'profile' | 'id'>;

export interface RSVP {
  id: string;

  user: UserRSVPRef;

  event: EventRef;

  status: RSVPStatus;
}
