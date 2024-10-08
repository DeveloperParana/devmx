import {
  provideCityFacade,
  provideCityService,
  provideFindCitiesByLocationUseCase,
  provideGeoFacade,
  provideGetCurrentPositionUseCase,
  provideSearchCitiesUseCase,
} from './providers';

export function provideLocation() {
  return [
    provideCityService(),

    provideFindCitiesByLocationUseCase(),
    provideSearchCitiesUseCase(),
    provideGetCurrentPositionUseCase(),

    provideCityFacade(),
    provideGeoFacade(),
  ];
}
