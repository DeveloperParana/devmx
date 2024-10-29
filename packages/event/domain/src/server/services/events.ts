import { EntityService } from '@devmx/shared-api-interfaces/server';
import { Event } from '@devmx/shared-api-interfaces';

export abstract class EventsService extends EntityService<Event> {}
