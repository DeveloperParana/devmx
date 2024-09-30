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

  abstract create(presentation: Event): Observable<EventOut>;

  abstract update(id: string, presentation: Event): Observable<EventOut>;

  abstract remove(id: string): Observable<EventOut>
}
