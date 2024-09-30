import { CityFacade } from '../facades';
import {
  SearchCitiesUseCase,
  FindCitiesByLocationUseCase,
} from '@devmx/location-domain/client';

export function createCityFacade() {
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
