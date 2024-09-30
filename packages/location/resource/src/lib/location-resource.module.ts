import { LocationDatabaseModule } from './location-database.module';
import { LocationsController } from './controllers';
import { Module } from '@nestjs/common';

@Module({
  imports: [LocationDatabaseModule],
  controllers: [LocationsController],
  providers: [],
  exports: [],
})
export class LocationResourceModule {}
