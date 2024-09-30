import { createServiceProvider } from '@devmx/shared-data-source';
import { EventsService } from '@devmx/event-domain/server';
import { getModelToken } from '@nestjs/mongoose';
import { EventsServiceImpl } from '../services';
import { EventCollection } from '../schemas';

export function provideEventsService() {
  return createServiceProvider(EventsService, EventsServiceImpl, [
    getModelToken(EventCollection.name),
  ]);
}
