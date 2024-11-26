import { AboutUserSchema } from '@devmx/shared-api-interfaces';
import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import {
  UserFacade,
  userSchemaResolverWrapped,
} from '@devmx/account-data-access';

export const aboutUserSchemaResolver: ResolveFn<AboutUserSchema> = (route) => {
  return userSchemaResolverWrapped(inject(UserFacade), route.params);
};
