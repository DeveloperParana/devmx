import { createServiceProvider, MongoService } from '@devmx/shared-data-source';
import { EventsService } from '@devmx/event-domain/server';
import { getModelToken } from '@nestjs/mongoose';
import { EventCollection } from '../schemas';
import { Query } from 'mongoose';

export class EventsMongoServiceImpl extends MongoService<EventCollection> {
  protected override applyPopulate<U>(query: Query<U, EventCollection>) {
    return query
      .populate('owner', 'name username photo')
      // .populate('presentations')
      // .populate('leaders');
  }
}

export function provideEventsMongoService() {
  return createServiceProvider(EventsService, EventsMongoServiceImpl, [
    getModelToken(EventCollection.name),
  ]);
}
