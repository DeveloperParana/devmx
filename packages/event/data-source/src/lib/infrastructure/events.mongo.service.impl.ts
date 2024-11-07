import { createServiceProvider, MongoService } from '@devmx/shared-data-source';
import { EditableEntity } from '@devmx/shared-api-interfaces';
import { EventsService } from '@devmx/event-domain/server';
import { getModelToken } from '@nestjs/mongoose';
import { EventCollection } from '../schemas';
import { Query } from 'mongoose';

export class EventsMongoServiceImpl
  extends MongoService<EventCollection>
  implements EventsService
{
  protected override applyPopulate<U>(query: Query<U, EventCollection>) {
    return query
      .populate('owner', 'name displayName profile')
      .populate('leaders', 'name displayName profile')
      .populate('presentations', 'title');
  }

  protected override applyEditableParser<U>(
    data: EditableEntity<EventCollection>
  ): U {
    const presentations = (data.presentations ?? []).map((p) => p.id);
    const leaders = (data.leaders ?? []).map((p) => p.id);
    return { ...data, leaders, presentations } as U;
  }
}

export function provideEventsMongoService() {
  return createServiceProvider(EventsService, EventsMongoServiceImpl, [
    getModelToken(EventCollection.name),
  ]);
}
