import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DestroyRef, Directive, inject } from '@angular/core';
import { Authentication } from '@devmx/shared-api-interfaces';
import { LayoutFacade } from '@devmx/shared-ui-global/layout';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

export abstract class AuthenticationService {
  abstract auth$: Observable<Authentication | null>;
  abstract load(): void;
}

@Directive()
export class ShellContainer {
  layoutFacade = inject(LayoutFacade);
  destroyRef = inject(DestroyRef);
  router = inject(Router);

  constructor(auth: AuthenticationService) {
    auth.auth$.pipe(takeUntilDestroyed()).subscribe((user) => {
      if (user) {
        this.layoutFacade.loadNavLinks(user.roles);
      } else {
        this.layoutFacade.resetNavLinks();
        this.router.navigateByUrl('/conta/autenticacao');
      }
    });

    auth.load();
  }
}
