import { User } from '@devmx/shared-api-interfaces';
import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import {
  UserFacade,
  aboutUserResolverWrapped,
} from '@devmx/account-data-access';

export const aboutUserResolver: ResolveFn<User> = (route) => {
  const params = route.parent ? route.parent.params : route.params;
  return aboutUserResolverWrapped(inject(UserFacade), params);
};
