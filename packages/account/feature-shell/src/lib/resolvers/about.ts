import { AboutFacade, aboutResolverWrapped } from '@devmx/account-data-access';
import { AccountOut } from '@devmx/shared-api-interfaces';
import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';

export const aboutResolver: ResolveFn<AccountOut> = (route) => {
  return aboutResolverWrapped(inject(AboutFacade), route.params);
};
