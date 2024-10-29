import { provideEventsFacade, provideRSVPsFacade } from '../application';

export function provideFacades() {
  return [provideEventsFacade(), provideRSVPsFacade()];
}
