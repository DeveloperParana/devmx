import { EventDatabaseModule } from './event-database.module';
import { Env } from '@devmx/shared-api-interfaces/server';
import { MulterModule } from '@nestjs/platform-express';
import { EventsController } from './controllers';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory(env: Env) {
        return env.multer.events.covers;
      },
      inject: [Env],
    }),
    EventDatabaseModule
  ],
  controllers: [EventsController],
})
export class EventResourceModule {}
