import {
  provideUsersFacade,
  provideAuthenticationFacade,
} from '../application';

export function provideFacades() {
  return [provideAuthenticationFacade(), provideUsersFacade()];
}
