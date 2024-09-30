import { CreateEvent, UpdateEvent } from '../../lib/dtos';
import { Observable } from 'rxjs';
import {
  Page,
  Event,
  EventOut,
  QueryParams,
} from '@devmx/shared-api-interfaces';

// prettier-ignore
export abstract class EventService {
  abstract find(params: QueryParams<Event>): Observable<Page<EventOut>>;

  abstract findOne(id: string): Observable<EventOut>

  abstract create(data: CreateEvent): Observable<EventOut>;

  abstract update(id: string, data: UpdateEvent): Observable<EventOut>;

  abstract remove(id: string): Observable<EventOut>
}
