import { provideAuthenticationFacade, provideUserFacade } from '../application';

export function provideFacades() {
  return [provideAuthenticationFacade(), provideUserFacade()];
}
