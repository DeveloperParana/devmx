import {
  createCityFacade,
  provideCityService,
  provideFindCitiesByLocationUseCase,
  provideSearchCitiesUseCase,
} from './providers';

export function provideLocations() {
  return [
    provideCityService(),

    provideFindCitiesByLocationUseCase(),
    provideSearchCitiesUseCase(),

    createCityFacade(),
  ];
}
