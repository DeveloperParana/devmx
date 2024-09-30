import { CitiesFacade } from '../facades';
import {
  FindCitiesUseCase,
  FindCityByIDUseCase,
  FindCitiesByLocationUseCase,
} from '@devmx/location-domain/server';

export function provideCitiesFacade() {
  return {
    provide: CitiesFacade,
    useFactory(
      findCities: FindCitiesUseCase,
      findCity: FindCityByIDUseCase,
      findCitiesByLocation: FindCitiesByLocationUseCase
    ) {
      return new CitiesFacade(findCities, findCity, findCitiesByLocation);
    },
    inject: [
      FindCitiesUseCase,
      FindCityByIDUseCase,
      FindCitiesByLocationUseCase,
    ],
  };
}
