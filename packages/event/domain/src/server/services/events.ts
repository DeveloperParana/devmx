import { EntityService } from '@devmx/shared-api-interfaces/server';
import { Event, Page, QueryParams } from '@devmx/shared-api-interfaces';

export abstract class EventsService extends EntityService<Event> {
  abstract findFrom(
    date: Date,
    params: QueryParams<Event>
  ): Promise<Page<Event>>;

  abstract findUntil(
    date: Date,
    params: QueryParams<Event>
  ): Promise<Page<Event>>;

  abstract findMyEvents(params: QueryParams<Event>): Promise<Page<Event>>;
}
