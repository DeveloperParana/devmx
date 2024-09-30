import { createServiceProvider } from '@devmx/shared-data-source';
import { CitiesService } from '@devmx/location-domain/server';
import { getModelToken } from '@nestjs/mongoose';
import { CitiesServiceImpl } from '../services';
import { CityCollection } from '../schemas';

export function provideCitiesService() {
  return createServiceProvider(CitiesService, CitiesServiceImpl, [
    getModelToken(CityCollection.name),
  ]);
}
