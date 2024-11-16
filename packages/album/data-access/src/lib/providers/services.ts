import {
  provideAlbumHttpService,
  providePhotoHttpService,
} from '../infrastrucure';

export function provideServices() {
  return [provideAlbumHttpService(), providePhotoHttpService()];
}
