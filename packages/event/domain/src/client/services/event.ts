import { EntityService } from '@devmx/shared-api-interfaces/client';
import { Observable } from 'rxjs';
import {
  Page,
  RSVP,
  Event,
  CopyEvent,
  RSVPStatus,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export abstract class EventService extends EntityService<Event> {
  abstract copy(id: string, data: CopyEvent): Observable<Event>;

  abstract findAll(params: QueryParams<Event>): Observable<Page<Event>>;

  abstract createRSVP(event: string, status: RSVPStatus): Observable<RSVP>;

  abstract findRSVPByEvent(event: string): Observable<RSVP[]>;

  abstract findRSVPConfirmedByEvent(event: string): Observable<RSVP[]>;
}
