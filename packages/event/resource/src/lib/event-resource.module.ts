import { EventDatabaseModule } from './event-database.module';
import { EventsController } from './controllers';
import { Module } from '@nestjs/common';

@Module({
  imports: [EventDatabaseModule],
  controllers: [EventsController],
})
export class EventResourceModule {}
