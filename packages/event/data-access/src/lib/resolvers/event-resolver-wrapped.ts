import { Params } from '@devmx/shared-api-interfaces';
import { EventFacade } from '../application';
import { distinctUntilChanged, filter } from 'rxjs';

export const eventResolverWrapped = (facade: EventFacade, params: Params) => {
  facade.loadOne(params['id']);
  return facade.selected$.pipe(
    distinctUntilChanged(),
    filter((event) => !!event)
  );
};
