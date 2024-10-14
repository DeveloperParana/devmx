import { provideServices, provideUseCases, provideFacades } from './providers';

export function provideLocations() {
  return [...provideServices(), ...provideUseCases(), ...provideFacades()];
}
