import { Params } from '@devmx/shared-api-interfaces';
import { distinctUntilChanged, filter } from 'rxjs';
import { UserFacade } from '../application';

export const userResolverWrapped = (facade: UserFacade, params: Params) => {
  facade.loadOne(params['id']);

  return facade.selected$.pipe(
    distinctUntilChanged(),
    filter((user) => !!user)
  );
};
