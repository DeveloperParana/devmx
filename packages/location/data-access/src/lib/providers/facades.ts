import { createClientProvider } from '@devmx/shared-data-access';
import { CityFacade, GeoFacade } from '../facades';
import {
  SearchCitiesUseCase,
  FindCitiesByLocationUseCase,
  GetCurrentPositionUseCase,
} from '@devmx/location-domain/client';

export function provideCityFacade() {
  return {
    provide: CityFacade,
    useFactory(
      findCitiesByLocation: FindCitiesByLocationUseCase,
      searchCities: SearchCitiesUseCase
    ) {
      return new CityFacade(findCitiesByLocation, searchCities);
    },
    deps: [FindCitiesByLocationUseCase, SearchCitiesUseCase],
  };
}

export function provideGeoFacade() {
  return createClientProvider(GeoFacade, [GetCurrentPositionUseCase]);
}
