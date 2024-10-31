import { Params } from '@devmx/shared-api-interfaces';
import { AlbumFacade } from '../application';
import { distinctUntilChanged, filter } from 'rxjs';

export const albumResolverWrapped = (facade: AlbumFacade, params: Params) => {
  facade.loadOne(params['id']);
  return facade.selected$.pipe(
    distinctUntilChanged(),
    filter((album) => !!album)
  );
};
