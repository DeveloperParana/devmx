import { provideJobOpeningsFacade } from '../application';

export function provideFacades() {
  return [provideJobOpeningsFacade()];
}
