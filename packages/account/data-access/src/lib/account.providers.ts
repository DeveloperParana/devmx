import { provideUseCases, provideServices, provideFacades } from './providers';

export function provideAccount() {
  return [...provideServices(), ...provideUseCases(), ...provideFacades()];
}
