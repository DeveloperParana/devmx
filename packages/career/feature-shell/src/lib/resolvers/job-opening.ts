import {
  JobOpeningFacade,
  jobOpeningResolverWrapped,
} from '@devmx/career-data-access';
import { JobOpening } from '@devmx/shared-api-interfaces';
import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';

export const jobOpeningResolver: ResolveFn<JobOpening | object> = (route) => {
  return jobOpeningResolverWrapped(inject(JobOpeningFacade), route.params);
};
