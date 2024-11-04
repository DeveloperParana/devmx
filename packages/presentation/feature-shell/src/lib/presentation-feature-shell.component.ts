import { LayoutComponent, LayoutFacade } from '@devmx/shared-ui-global/layout';
import { AuthenticationFacade } from '@devmx/account-data-access';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
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
  selector: 'devmx-presentation-feature-shell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, LayoutComponent],
  standalone: true,
})
export class PresentationFeatureShellComponent implements OnInit {
  router = inject(Router);
  destroyRef = inject(DestroyRef);
  authenticationFacade = inject(AuthenticationFacade);

  layoutFacade = inject(LayoutFacade);

  ngOnInit() {
    this.authenticationFacade.auth$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((user) => {
        if (user) {
          this.layoutFacade.loadNavLinks(user.roles);

          this.waitingForLogout();
        }
      });

    this.authenticationFacade.load();
  }

  waitingForLogout() {
    this.authenticationFacade.auth$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((user) => {
        if (user === null) {
          this.layoutFacade.resetNavLinks();
          this.router.navigateByUrl('/conta/auth');
        }
      });
  }
}
