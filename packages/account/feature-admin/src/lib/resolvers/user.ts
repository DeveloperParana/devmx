import { UserFacade } from '@devmx/account-data-access';
import { User } from '@devmx/shared-api-interfaces';
import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { filter } from 'rxjs';

export const userResolver: ResolveFn<User> = (route) => {
  const facade = inject(UserFacade);
  facade.loadOne(route.params['id']);
  return facade.selected$.pipe(filter((user) => !!user));
};
