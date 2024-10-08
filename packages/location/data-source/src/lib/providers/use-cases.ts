import { createUseCaseProvider } from '@devmx/shared-data-source';
import {
  CitiesService,
  FindCitiesUseCase,
  FindCityByIDUseCase,
  FindCitiesByLocationUseCase,
  SearchCitiesUseCase,
} from '@devmx/location-domain/server';

export function provideFindCitiesUseCase() {
  return createUseCaseProvider(FindCitiesUseCase, [CitiesService]);
}

export function provideFindCityByIDUseCase() {
  return createUseCaseProvider(FindCityByIDUseCase, [CitiesService]);
}

export function provideFindCitiesByLocationUseCase() {
  return createUseCaseProvider(FindCitiesByLocationUseCase, [CitiesService]);
}

export function provideSearchCitiesUseCase() {
  return createUseCaseProvider(SearchCitiesUseCase, [CitiesService]);
}
