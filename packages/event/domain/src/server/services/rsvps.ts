import { RSVP, RSVPStatus } from '@devmx/shared-api-interfaces';

export abstract class RSVPsService {
  abstract create(
    account: string,
    event: string,
    status: RSVPStatus
  ): Promise<RSVP>;

  abstract findByEvent(event: string): Promise<RSVP[]>;

  abstract findConfirmedByEvent(event: string): Promise<RSVP[]>;
}
