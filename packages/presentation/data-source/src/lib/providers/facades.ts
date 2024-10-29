import { providePresentationsFacade } from '../application';

export function provideFacades() {
  return [providePresentationsFacade()];
}
