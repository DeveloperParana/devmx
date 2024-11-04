import { AuthenticationFacade } from '@devmx/account-data-access';
import { Role } from '@devmx/shared-api-interfaces';
import { CanMatchFn } from '@angular/router';
import { inject } from '@angular/core';
import { filter, map } from 'rxjs';

export const rolesGuard = (...roles: Role[]): CanMatchFn => {
  return () => {
    const authenticationFacade = inject(AuthenticationFacade);

    const has$ = authenticationFacade.auth$.pipe(
      filter((account) => !!account),
      map((account) => {
        return roles.some((role) => account.roles[role]);
      })
    );

    authenticationFacade.load();

    return has$;
  };
};
