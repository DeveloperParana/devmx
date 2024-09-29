import { RoleGroup } from '@devmx/shared-api-interfaces';
import { AuthFacade } from '@devmx/account-data-access';
import { CanMatchFn } from '@angular/router';
import { inject } from '@angular/core';
import { filter, map } from 'rxjs';

export const roleGroupGuard = (group: RoleGroup): CanMatchFn => {
  return () => {
    const authFacade = inject(AuthFacade);

    const hasGroup$ = authFacade.level$.pipe(
      filter((account) => !!account),
      map((account) => account.groups.includes(group))
    );

    authFacade.loadAuthUser();

    return hasGroup$;
  };
};
