import { createServerProvider } from '@devmx/shared-data-source';
import { CitiesFacade, PlacesFacade } from '../facades';
import {
  FindCitiesUseCase,
  FindCityByIDUseCase,
  FindCitiesByLocationUseCase,
  SearchCitiesUseCase,
  CreatePlaceUseCase,
  UpdatePlaceUseCase,
  RemovePlaceUseCase,
  FindPlacesUseCase,
  SearchPlacesUseCase,
  FindPlaceByIDUseCase,
  FindPlacesByLocationUseCase,
} from '@devmx/location-domain/server';

export function provideCitiesFacade() {
  return {
    provide: CitiesFacade,
    useFactory(
      findCities: FindCitiesUseCase,
      searchCities: SearchCitiesUseCase,
      findCity: FindCityByIDUseCase,
      findCitiesByLocation: FindCitiesByLocationUseCase
    ) {
      return new CitiesFacade(
        findCities,
        searchCities,
        findCity,
        findCitiesByLocation
      );
    },
    inject: [
      FindCitiesUseCase,
      SearchCitiesUseCase,
      FindCityByIDUseCase,
      FindCitiesByLocationUseCase,
    ],
  };
}

export function providePlacesFacade() {
  return createServerProvider(PlacesFacade, [
    CreatePlaceUseCase,
    UpdatePlaceUseCase,
    RemovePlaceUseCase,
    FindPlacesUseCase,
    SearchPlacesUseCase,
    FindPlaceByIDUseCase,
    FindPlacesByLocationUseCase,
  ]);
}

export function provideFacades() {
  return [provideCitiesFacade(), providePlacesFacade()];
}
