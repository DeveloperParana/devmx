import { AlbumFacade, albumResolverWrapped } from '@devmx/album-data-access';
import { Album } from '@devmx/shared-api-interfaces';
import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';

export const albumResolver: ResolveFn<Album> = (route) => {
  return albumResolverWrapped(inject(AlbumFacade), route.params);
};

// import { Album } from '@devmx/shared-api-interfaces';
// import { AlbumService } from '../data-access';
// import { ResolveFn } from '@angular/router';
// import { inject } from '@angular/core';
// import { take } from 'rxjs';

// export const albumResolver: ResolveFn<Album> = (route) => {
//   return inject(AlbumService).findOne(route.params['id']).pipe(take(1));
// };
