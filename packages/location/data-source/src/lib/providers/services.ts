import { CitiesService, PlacesService } from '@devmx/location-domain/server';
import { CitiesServiceImpl, PlacesServiceImpl } from '../services';
import { createServiceProvider } from '@devmx/shared-data-source';
import { CityCollection, PlaceCollection } from '../schemas';
import { getModelToken } from '@nestjs/mongoose';

export function provideCitiesService() {
  return createServiceProvider(CitiesService, CitiesServiceImpl, [
    getModelToken(CityCollection.name),
  ]);
}

export function providePlacesService() {
  return createServiceProvider(PlacesService, PlacesServiceImpl, [
    getModelToken(PlaceCollection.name),
  ]);
}

export function provideServices() {
  return [provideCitiesService(), providePlacesService()];
}
