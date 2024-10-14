import { LocationsController, PlacesController } from './controllers';
import { LocationDatabaseModule } from './location-database.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [LocationDatabaseModule],
  controllers: [LocationsController, PlacesController],
  providers: [],
  exports: [],
})
export class LocationResourceModule {}
