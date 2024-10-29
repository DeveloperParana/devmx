import { provideFacades, provideServices, provideUseCases } from './providers';

export function provideEvents() {
  return [
    ...provideServices(),
    // provideCitiesService(),

    ...provideUseCases(),

    ...provideFacades(),
  ];
}
