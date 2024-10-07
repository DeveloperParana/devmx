import { createUseCaseProvider } from '@devmx/shared-data-access';
import {
  CityService,
  FindCitiesByLocationUseCase,
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
