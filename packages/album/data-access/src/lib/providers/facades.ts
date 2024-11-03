import { provideAlbumFacade } from '../application';

export function provideFacades() {
  return [provideAlbumFacade()];
}
