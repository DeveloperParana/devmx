import { provideMessagesFacade } from '../application';

export function provideFacades() {
  return [provideMessagesFacade()];
}
