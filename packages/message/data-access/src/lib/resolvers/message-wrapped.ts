import { Params } from '@devmx/shared-api-interfaces';
import { MessageFacade } from '../application';
import { filter } from 'rxjs';

export const messageResolverWrapped = (
  facade: MessageFacade,
  params: Params
) => {
  facade.loadOne(params['id']);
  return facade.selected$.pipe(filter((message) => !!message));
};
