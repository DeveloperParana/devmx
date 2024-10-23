import { AuthFacade } from '@devmx/account-data-access';
import { Role } from '@devmx/shared-api-interfaces';
import { CanMatchFn } from '@angular/router';
import { inject } from '@angular/core';
import { filter, map } from 'rxjs';

export const roleGuard = (role: Role): CanMatchFn => {
  return () => {
    const authFacade = inject(AuthFacade);

    const has$ = authFacade.user$.pipe(
      filter((account) => !!account),
      map((account) => account.roles[role])
    );

    authFacade.loadAuthUser();

    return has$;
  };
};
