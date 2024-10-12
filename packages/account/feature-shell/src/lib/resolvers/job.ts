import { JobFacade, jobResolverWrapped } from '@devmx/career-data-access';
import { JobOut } from '@devmx/shared-api-interfaces';
import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';

export const jobResolver: ResolveFn<JobOut> = (route) => {
  return jobResolverWrapped(inject(JobFacade), route.params);
};
