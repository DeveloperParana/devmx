import { LayoutComponent, LayoutFacade } from '@devmx/shared-ui-global/layout';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationFacade } from '@devmx/account-data-access';
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
  selector: 'devmx-album-feature-shell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, LayoutComponent],
  standalone: true,
})
export class AlbumFeatureShellComponent {
  router = inject(Router);
  destroyRef = inject(DestroyRef);
  authFacade = inject(AuthenticationFacade);
  layoutFacade = inject(LayoutFacade);

  constructor() {
    this.authFacade.auth$.pipe(takeUntilDestroyed()).subscribe((user) => {
      if (user) {
        this.layoutFacade.loadNavLinks(user.roles);

        this.waitingForLogout();
      }
    });

    this.authFacade.load();
  }

  waitingForLogout() {
    this.authFacade.auth$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((user) => {
        if (user === null) {
          this.layoutFacade.resetNavLinks();
          this.router.navigateByUrl('/conta/auth');
        }
      });
  }
}
