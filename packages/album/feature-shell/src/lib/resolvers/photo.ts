import { PhotoFacade, photoResolverWrapped } from '@devmx/album-data-access';
import { Photo } from '@devmx/shared-api-interfaces';
import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';

export const photoResolver: ResolveFn<Photo | object> = (route) => {
  return photoResolverWrapped(inject(PhotoFacade), route.params);
};
