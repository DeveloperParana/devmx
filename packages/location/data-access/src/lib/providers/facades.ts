import { createClientProvider } from '@devmx/shared-data-access';
import { AddressFacade, CityFacade, GeoFacade } from '../facades';
import {
  SearchCitiesUseCase,
  FindCitiesByLocationUseCase,
  GetCurrentPositionUseCase,
  GetCoordsByAddressUseCase,
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

export function provideAddressFacade() {
  return createClientProvider(AddressFacade, [GetCoordsByAddressUseCase]);
}

export function provideFacades() {
  return [provideCityFacade(), provideGeoFacade(), provideAddressFacade()];
}
