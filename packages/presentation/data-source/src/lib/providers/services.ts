import { providePresentationsMongoService } from '../infrastructure';

export function provideServices() {
  return [
    providePresentationsMongoService(),
  ];
}
