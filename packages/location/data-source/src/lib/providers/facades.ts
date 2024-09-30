import { CitiesFacade } from '../facades';
import {
  FindCitiesUseCase,
  FindCityByIDUseCase,
  FindCitiesByLocationUseCase,
  SearchCitiesUseCase,
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
