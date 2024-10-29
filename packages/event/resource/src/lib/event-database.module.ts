import { MongooseModule } from '@nestjs/mongoose';
import { Global, Module } from '@nestjs/common';
import {
  EventSchema,
  provideEvents,
  EventCollection,
  RSVPCollection,
  RSVPSchema,
} from '@devmx/event-data-source';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: EventCollection.name,
        schema: EventSchema,
      },
      {
        name: RSVPCollection.name,
        schema: RSVPSchema,
      },
    ]),
  ],
  providers: [...provideEvents()],
  exports: [...provideEvents()],
})
export class EventDatabaseModule {}
