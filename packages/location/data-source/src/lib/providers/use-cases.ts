import { createUseCaseProvider } from '@devmx/shared-data-source';
import {
  CitiesService,
  FindCitiesUseCase,
  FindCityByIDUseCase,
  FindCitiesByLocationUseCase,
  SearchCitiesUseCase,
  FindPlacesUseCase,
  PlacesService,
  FindPlaceByIDUseCase,
  FindPlacesByLocationUseCase,
  SearchPlacesUseCase,
  CreatePlaceUseCase,
  UpdatePlaceUseCase,
  RemovePlaceUseCase,
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

//

export function provideCreatePlaceUseCase() {
  return createUseCaseProvider(CreatePlaceUseCase, [PlacesService]);
}

export function provideUpdatePlaceUseCase() {
  return createUseCaseProvider(UpdatePlaceUseCase, [PlacesService]);
}

export function provideRemovePlaceUseCase() {
  return createUseCaseProvider(RemovePlaceUseCase, [PlacesService]);
}

export function provideFindPlacesUseCase() {
  return createUseCaseProvider(FindPlacesUseCase, [PlacesService]);
}

export function provideFindPlaceByIDUseCase() {
  return createUseCaseProvider(FindPlaceByIDUseCase, [PlacesService]);
}

export function provideFindPlacesByLocationUseCase() {
  return createUseCaseProvider(FindPlacesByLocationUseCase, [PlacesService]);
}

export function provideSearchPlacesUseCase() {
  return createUseCaseProvider(SearchPlacesUseCase, [PlacesService]);
}

export function provideUseCases() {
  return [
    provideFindCitiesUseCase(),
    provideFindCityByIDUseCase(),
    provideFindCitiesByLocationUseCase(),
    provideSearchCitiesUseCase(),
    provideCreatePlaceUseCase(),
    provideUpdatePlaceUseCase(),
    provideRemovePlaceUseCase(),
    provideFindPlacesUseCase(),
    provideFindPlaceByIDUseCase(),
    provideFindPlacesByLocationUseCase(),
    provideSearchPlacesUseCase(),
  ];
}
