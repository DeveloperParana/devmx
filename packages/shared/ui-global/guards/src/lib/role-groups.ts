import { RoleGroup } from '@devmx/shared-api-interfaces';
import { AuthFacade } from '@devmx/account-data-access';
import { CanMatchFn } from '@angular/router';
import { inject } from '@angular/core';
import { filter, map } from 'rxjs';

export const roleGroupsGuard = (...groups: RoleGroup[]): CanMatchFn => {
  return () => {
    const authFacade = inject(AuthFacade);

    const hasGroup$ = authFacade.level$.pipe(
      filter((account) => !!account),
      map((account) => {
        return groups.some((group) => {
          return account.groups.includes(group);
        });
      })
    );

    authFacade.loadAuthUser();

    return hasGroup$;
  };
};
