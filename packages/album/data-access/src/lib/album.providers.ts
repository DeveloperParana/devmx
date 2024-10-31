import { provideFacades, provideServices, provideUseCases } from './providers';

export function provideAlbum() {
  return [...provideServices(), ...provideUseCases(), ...provideFacades()];
}
