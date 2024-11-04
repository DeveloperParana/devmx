import {
  provideAuthenticationHttpService,
  provideUserHttpService,
} from '../infrastructure';

export function provideServices() {
  return [provideAuthenticationHttpService(), provideUserHttpService()];
}
