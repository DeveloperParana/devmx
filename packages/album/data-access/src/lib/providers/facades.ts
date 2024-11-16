import { provideAlbumFacade, providePhotoFacade } from '../application';

export function provideFacades() {
  return [provideAlbumFacade(), providePhotoFacade()];
}
