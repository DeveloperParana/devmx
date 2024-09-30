import { MongooseModule } from '@nestjs/mongoose';
import { Global, Module } from '@nestjs/common';
import {
  CitySchema,
  CityCollection,
  provideLocations,
} from '@devmx/location-data-source';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CityCollection.name, schema: CitySchema },
    ]),
  ],
  providers: [...provideLocations()],
  exports: [...provideLocations()],
})
export class LocationDatabaseModule {}
