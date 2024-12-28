import { provideAlbum, providePhoto } from './providers';

export function provideAlbums() {
  return [...provideAlbum(), ...providePhoto()];
}
