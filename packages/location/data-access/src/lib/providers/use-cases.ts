import { createUseCaseProvider } from '@devmx/shared-data-access';
import {
  CityService,
  FindCitiesByLocationUseCase,
  SearchCitiesUseCase,
} from '@devmx/location-domain/client';

export function provideFindCitiesByLocationUseCase() {
  return createUseCaseProvider(FindCitiesByLocationUseCase, [CityService]);
}

export function provideSearchCitiesUseCase() {
  return createUseCaseProvider(SearchCitiesUseCase, [CityService]);
}
