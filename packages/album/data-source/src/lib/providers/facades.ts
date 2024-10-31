import { provideAlbumsFacade } from '../application';

export function provideFacades() {
  return [provideAlbumsFacade()];
}
