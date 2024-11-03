import { provideFacades, provideServices, provideUseCases } from './providers';

export function provideAcademies() {
  return [...provideServices(), ...provideUseCases(), ...provideFacades()];
}
