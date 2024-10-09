import { provideFacades, provideServices, provideUseCases } from './providers';

export function provideCareer() {
  return [...provideServices(), ...provideUseCases(), ...provideFacades()];
}
