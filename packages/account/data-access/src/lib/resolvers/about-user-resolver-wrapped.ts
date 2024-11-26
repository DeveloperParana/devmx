import { Params } from '@devmx/shared-api-interfaces';
import { distinctUntilChanged, filter } from 'rxjs';
import { UserFacade } from '../application';

export const aboutUserResolverWrapped = (
  facade: UserFacade,
  params: Params
) => {
  facade.loadOneByName(params['name']);

  return facade.selected$.pipe(
    distinctUntilChanged(),
    filter((event) => !!event)
  );
};
