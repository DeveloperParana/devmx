import { provideFacades, provideServices, provideUseCases } from './providers';

export function provideAlbums() {
  return [...provideServices(), ...provideUseCases(), ...provideFacades()];
}
