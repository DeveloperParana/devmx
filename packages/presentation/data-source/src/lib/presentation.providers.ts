import { provideFacades, provideServices, provideUseCases } from './providers';

export function providePresentations() {
  return [...provideServices(), ...provideUseCases(), ...provideFacades()];
}
