import {
  provideCitiesFacade,
  provideCitiesService,
  provideFindCitiesUseCase,
  provideFindCityByIDUseCase,
  provideFindCitiesByLocationUseCase,
  provideSearchCitiesUseCase,
} from './providers';

export function provideLocations() {
  return [
    provideCitiesService(),

    provideFindCitiesUseCase(),
    provideFindCityByIDUseCase(),
    provideFindCitiesByLocationUseCase(),
    provideSearchCitiesUseCase(),

    provideCitiesFacade(),
  ];
}
