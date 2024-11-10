import {
  provideJobOpeningHttpService,
} from '../infrastructure';

export function provideServices() {
  return [provideJobOpeningHttpService()];
}
