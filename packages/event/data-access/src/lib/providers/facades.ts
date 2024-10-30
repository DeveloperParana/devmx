import { provideEventFacade, provideRSVPFacade } from '../application';

export function provideFacades() {
  return [provideEventFacade(), provideRSVPFacade()];
}
