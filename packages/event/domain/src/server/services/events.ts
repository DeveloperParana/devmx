import { EntityService } from '@devmx/shared-api-interfaces/server';
import { Event, Page, QueryParams } from '@devmx/shared-api-interfaces';

export abstract class EventsService extends EntityService<Event> {
  abstract findFrom(
    date: Date,
    params: QueryParams<Event>
  ): Promise<Page<Event>>;
  // abstract findPast(params: QueryParams<Event>): Promise<Page<Event>>;
}
