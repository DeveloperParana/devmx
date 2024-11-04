import { UserRef, EventRef } from '../dtos';
import { RSVPStatus } from '../types';

export interface RSVP {
  id: string;

  account: UserRef;

  event: EventRef;

  status: RSVPStatus;
}
