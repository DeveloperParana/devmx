import { Params } from '@devmx/shared-api-interfaces';
import { EventFacade } from '../facades';
import { distinctUntilChanged, filter } from 'rxjs';

export const eventResolverWrapped = (facade: EventFacade, params: Params) => {
  facade.loadOne(params['id']);
  return facade.event$.pipe(
    distinctUntilChanged(),
    filter((event) => !!event)
  );
};
