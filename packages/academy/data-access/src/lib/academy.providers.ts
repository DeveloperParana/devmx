import { provideFacades, provideServices, provideUseCases } from './providers';

export function provideAcademy() {
  return [...provideServices(), ...provideUseCases(), ...provideFacades()];
}
