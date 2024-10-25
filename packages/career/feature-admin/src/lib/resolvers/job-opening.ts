import { JobOpeningFacade, jobOpeningResolverWrapped } from '@devmx/career-data-access';
import { JobOpening } from '@devmx/shared-api-interfaces';
import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { of } from 'rxjs';

export const jobOpeningResolver: ResolveFn<JobOpening | object> = (route) => {
  if (route.params['id'] === 'nova') return of({})

  return jobOpeningResolverWrapped(inject(JobOpeningFacade), route.params);
};
