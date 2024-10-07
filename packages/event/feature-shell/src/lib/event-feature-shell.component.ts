import { LayoutComponent, LayoutSidenav } from '@devmx/shared-ui-global/layout';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthFacade } from '@devmx/account-data-access';
import { Router, RouterModule } from '@angular/router';
import {
  inject,
  OnInit,
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
  selector: 'devmx-event-feature-shell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, LayoutComponent],
  standalone: true,
})
export class EventFeatureShellComponent implements OnInit {
  authFacade = inject(AuthFacade);

  sidenav = inject(LayoutSidenav);

  router = inject(Router);

  destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.authFacade.user$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((user) => {
        if (user) {
          this.sidenav.setRoles(user.roles);
          this.onLogout();
        }
      });

    this.authFacade.loadAuthUser();
  }

  onLogout() {
    this.authFacade.user$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((user) => {
        if (!user) {
          this.sidenav.resetRoles();
          this.router.navigateByUrl('/conta/auth');
        }
      });
  }
}
