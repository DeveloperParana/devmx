import { MongooseModule } from '@nestjs/mongoose';
import { Global, Module } from '@nestjs/common';
import {
  CitySchema,
  CityCollection,
  provideLocations,
  PlaceCollection,
  PlaceSchema,
} from '@devmx/location-data-source';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CityCollection.name, schema: CitySchema },
      { name: PlaceCollection.name, schema: PlaceSchema },
    ]),
  ],
  providers: [...provideLocations()],
  exports: [...provideLocations()],
})
export class LocationDatabaseModule {}
