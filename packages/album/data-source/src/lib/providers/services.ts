import {
  provideAlbumsMongoService,
  providePhotosMongoService,
} from '../infrastructure';

export function provideServices() {
  return [provideAlbumsMongoService(), providePhotosMongoService()];
}
