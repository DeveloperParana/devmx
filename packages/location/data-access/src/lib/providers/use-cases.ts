import { createUseCaseProvider } from '@devmx/shared-data-access';
import {
  AddressService,
  CityService,
  FindCitiesByLocationUseCase,
  GetCoordsByAddressUseCase,
  GetCurrentPositionUseCase,
  SearchCitiesUseCase,
} from '@devmx/location-domain/client';

export function provideFindCitiesByLocationUseCase() {
  return createUseCaseProvider(FindCitiesByLocationUseCase, [CityService]);
}

export function provideSearchCitiesUseCase() {
  return createUseCaseProvider(SearchCitiesUseCase, [CityService]);
}

export function provideGetCurrentPositionUseCase() {
  return createUseCaseProvider(GetCurrentPositionUseCase, []);
}

export function provideGetCoordsByAddressUseCase() {
  return createUseCaseProvider(GetCoordsByAddressUseCase, [AddressService]);
}

export function provideUseCases() {
  return [
    provideFindCitiesByLocationUseCase(),
    provideSearchCitiesUseCase(),
    provideGetCurrentPositionUseCase(),
    provideGetCoordsByAddressUseCase(),
  ];
}
