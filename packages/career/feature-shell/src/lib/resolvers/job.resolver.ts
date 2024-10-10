import { JobFacade } from '@devmx/career-data-access';
import { JobOut } from '@devmx/shared-api-interfaces';
import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { filter } from 'rxjs';

export const jobResolver: ResolveFn<JobOut> = (route) => {
  const facade = inject(JobFacade);
  facade.loadOne(route.params['id']);
  return facade.job$.pipe(filter((job) => !!job));
};
