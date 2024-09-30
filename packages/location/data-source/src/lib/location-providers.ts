import {
  provideCitiesFacade,
  provideCitiesService,
  provideFindCitiesUseCase,
  provideFindCityByIDUseCase,
  provideFindCitiesByLocationUseCase,
} from './providers';

export function provideLocations() {
  return [
    provideCitiesService(),

    provideFindCitiesUseCase(),
    provideFindCityByIDUseCase(),
    provideFindCitiesByLocationUseCase(),

    provideCitiesFacade(),
  ];
}
