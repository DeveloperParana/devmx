import { provideAlbumsFacade, providePhotosFacade } from '../application';

export function provideFacades() {
  return [provideAlbumsFacade(), providePhotosFacade()];
}
