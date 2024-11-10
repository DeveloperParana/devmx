import { provideJobOpeningFacade } from '../application';

export function provideFacades() {
  return [provideJobOpeningFacade()];
}
