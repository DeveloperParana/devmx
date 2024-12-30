import { Params } from '@devmx/shared-api-interfaces';
import { PhotoFacade } from '../application';
import { distinctUntilChanged, filter } from 'rxjs';

export const photoResolverWrapped = (facade: PhotoFacade, params: Params) => {
  facade.loadOne(params['id']);
  return facade.selected$.pipe(
    distinctUntilChanged(),
    filter((photo) => !!photo)
  );
};
