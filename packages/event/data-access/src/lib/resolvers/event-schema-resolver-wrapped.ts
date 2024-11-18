import { Params } from '@devmx/shared-api-interfaces';
import { distinctUntilChanged, filter } from 'rxjs';
import { EventFacade } from '../application';

export const eventSchemaResolverWrapped = (
  facade: EventFacade,
  params: Params
) => {
  facade.loadOne(params['id']);

  return facade.schema$.pipe(
    distinctUntilChanged(),
    filter((event) => !!event)
  );
};
