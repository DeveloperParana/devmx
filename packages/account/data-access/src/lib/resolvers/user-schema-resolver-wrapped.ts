import { Params } from '@devmx/shared-api-interfaces';
import { distinctUntilChanged, filter } from 'rxjs';
import { UserFacade } from '../application';

export const userSchemaResolverWrapped = (
  facade: UserFacade,
  params: Params
) => {
  facade.loadOneByName(params['name']);

  return facade.schema$.pipe(
    distinctUntilChanged(),
    filter((user) => !!user)
  );
};
