import { Institution } from '@devmx/shared-api-interfaces';
import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import {
  InstitutionFacade,
  institutionResolverWrapped,
} from '@devmx/academy-data-access';

export const institutionResolver: ResolveFn<Institution> = (route) => {
  return institutionResolverWrapped(inject(InstitutionFacade), route.params);
};
