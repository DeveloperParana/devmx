import {
  provideJobOpeningsMongoService,
} from '../infrastructure';

export function provideServices() {
  return [provideJobOpeningsMongoService()];
}
