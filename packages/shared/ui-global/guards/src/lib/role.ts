import { AuthenticationFacade } from '@devmx/account-data-access';
import { Role } from '@devmx/shared-api-interfaces';
import { CanMatchFn } from '@angular/router';
import { inject } from '@angular/core';
import { filter, map } from 'rxjs';

export const roleGuard = (role: Role): CanMatchFn => {
  return () => {
    const authenticationFacade = inject(AuthenticationFacade);

    const has$ = authenticationFacade.auth$.pipe(
      filter((account) => !!account),
      map((account) => account.roles[role])
    );

    authenticationFacade.load();

    return has$;
  };
};
