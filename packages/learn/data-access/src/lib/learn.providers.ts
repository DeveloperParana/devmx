import { provideFacades, provideServices, provideUseCases } from './providers';

export function provideLearn() {
  return [...provideServices(), ...provideUseCases(), ...provideFacades()];
}
