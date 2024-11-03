import { provideMessageHttpService } from '../infrastructure';

export function provideServices() {
  return [provideMessageHttpService()];
}
