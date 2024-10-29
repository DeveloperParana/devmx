import { providePresentationFacade } from '../application';

export function provideFacades() {
  return [providePresentationFacade()];
}
