import { providePhoto, provideAlbum as $provideAlbum } from './providers';

export function provideAlbum() {
  return [...providePhoto(), ...$provideAlbum()];
}
