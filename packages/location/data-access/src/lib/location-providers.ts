import { provideFacades, provideServices, provideUseCases } from './providers';

export function provideLocation() {
  return [...provideServices(), ...provideUseCases(), ...provideFacades()];
}
