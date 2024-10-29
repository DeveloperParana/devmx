import { AccountRef, EventRef } from '../dtos';
import { RSVPStatus } from '../types';

export interface RSVP {
  id: string;

  account: AccountRef;

  event: EventRef;

  status: RSVPStatus;
}
