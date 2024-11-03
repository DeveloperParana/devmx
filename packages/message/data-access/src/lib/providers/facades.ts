import { provideMessageFacade } from '../application';

export function provideFacades() {
  return [provideMessageFacade()];
}
