import { AlbumFacade, albumResolverWrapped } from '@devmx/album-data-access';
import { Album } from '@devmx/shared-api-interfaces';
import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';

export const albumResolver: ResolveFn<Album | object> = (route) => {
  return albumResolverWrapped(inject(AlbumFacade), route.params);
};
