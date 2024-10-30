import { Event, RSVP, RSVPStatus } from '@devmx/shared-api-interfaces';
import { EntityService } from '@devmx/shared-api-interfaces/client';
import { Observable } from 'rxjs';

export abstract class EventService extends EntityService<Event> {
  abstract createRSVP(event: string, status: RSVPStatus): Observable<RSVP>;

  abstract findRSVPByEvent(event: string): Observable<RSVP[]>;
}
