import { provideFacades, provideUseCases, provideServices } from './providers';

export function provideEvent() {
  return [...provideServices(), ...provideUseCases(), ...provideFacades()];
}
