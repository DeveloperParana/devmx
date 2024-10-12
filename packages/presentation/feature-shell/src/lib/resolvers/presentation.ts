import { PresentationOut } from '@devmx/shared-api-interfaces';
import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import {
  PresentationFacade,
  presentationResolverWrapped,
} from '@devmx/presentation-data-access';

export const presentationResolver: ResolveFn<PresentationOut> = (route) => {
  return presentationResolverWrapped(inject(PresentationFacade), route.params);
};
