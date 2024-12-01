import { User } from '@devmx/shared-api-interfaces';
import { filter, switchMap, take } from 'rxjs';
import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import {
  UserFacade,
  userResolverWrapped,
  AuthenticationFacade,
} from '@devmx/account-data-access';

export const accountResolver: ResolveFn<User> = () => {
  const authFacade = inject(AuthenticationFacade);
  const userFacade = inject(UserFacade);

  const auth$ = authFacade.auth$.pipe(
    filter((auth) => !!auth),
    take(1)
  );

  return auth$.pipe(
    switchMap((auth) => {
      return userResolverWrapped(userFacade, { id: auth.id });
    })
  );
};
