import { LayoutComponent, LayoutFacade } from '@devmx/shared-ui-global/layout';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthFacade } from '@devmx/account-data-access';
import { Router, RouterModule } from '@angular/router';
import {
  inject,
  Component,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  template: `<devmx-layout />`,
  styles: `
    :host {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, LayoutComponent],
  standalone: true,
})
export class AcademyFeatureShellComponent {
  router = inject(Router);
  destroyRef = inject(DestroyRef);
  authFacade = inject(AuthFacade);
  layoutFacade = inject(LayoutFacade);

  constructor() {
    this.authFacade.user$.pipe(takeUntilDestroyed()).subscribe((user) => {
      if (user) {
        this.layoutFacade.loadNavLinks(user.roles);

        this.waitingForLogout();
      }
    });

    this.authFacade.loadAuthUser();
  }

  waitingForLogout() {
    this.authFacade.user$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((user) => {
        if (user === null) {
          this.layoutFacade.resetNavLinks();
          this.router.navigateByUrl('/conta/auth');
        }
      });
  }
}
