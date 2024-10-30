import { provideEventHttpService } from '../infrastructure';

export function provideServices() {
  return [provideEventHttpService()];
}
