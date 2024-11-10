import { provideFacades, provideServices, provideUseCases } from './providers';

export function provideLearns() {
  return [...provideServices(), ...provideUseCases(), ...provideFacades()];
}
