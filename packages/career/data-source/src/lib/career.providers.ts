import { provideFacades, provideServices, provideUseCases } from './providers';

export function provideCareers() {
  return [...provideServices(), ...provideUseCases(), ...provideFacades()];
}
