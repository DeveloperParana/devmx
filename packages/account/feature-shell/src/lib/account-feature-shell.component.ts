import { LayoutComponent, LayoutFacade } from '@devmx/shared-ui-global/layout';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthenticationFacade } from '@devmx/account-data-access';
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
  selector: 'devmx-account-feature-shell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, LayoutComponent],
})
export class AccountFeatureShellComponent implements OnInit {
  router = inject(Router);
  destroyRef = inject(DestroyRef);
  authFacade = inject(AuthenticationFacade);
  layoutFacade = inject(LayoutFacade);

  ngOnInit() {
    this.authFacade.auth$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((user) => {
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
        if (!user) {
          this.layoutFacade.resetNavLinks();
          this.router.navigateByUrl('/conta/autenticacao');
        }
      });
  }
}
