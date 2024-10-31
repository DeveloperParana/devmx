import { provideAlbumsMongoService } from '../infrastructure';

export function provideServices() {
  return [provideAlbumsMongoService()];
}
