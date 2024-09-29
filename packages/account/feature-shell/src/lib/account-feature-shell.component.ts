import { AuthUserComponent, ToolbarComponent } from '@devmx/shared-ui-global';
import { AccountNavFacade, AuthFacade } from '@devmx/account-data-access';
import { PresentationFacade } from '@devmx/presentation-data-access';
import { LayoutModule, MediaMatcher } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import {
  inject,
  OnInit,
  Component,
  OnDestroy,
  DestroyRef,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'devmx-account-feature-shell',
  templateUrl: './account-feature-shell.component.html',
  styleUrl: './account-feature-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ToolbarComponent,
    AuthUserComponent,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
    RouterModule,
    AsyncPipe,
  ],
  standalone: true,
})
export class AccountFeatureShellComponent implements OnInit, OnDestroy {
  presentationFacade = inject(PresentationFacade);

  authFacade = inject(AuthFacade);

  navFacade = inject(AccountNavFacade);

  destroyRef = inject(DestroyRef);

  router = inject(Router);

  mobileQuery: MediaQueryList;

  #mobileQueryListener: () => void;

  constructor() {
    const changeDetectorRef = inject(ChangeDetectorRef);
    const media = inject(MediaMatcher);

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.#mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this.#mobileQueryListener);
  }

  ngOnInit() {
    const navItemBoard = {
      path: ['/account', 'board'],
      text: 'Dashboard',
      icon: 'dashboard',
    };
    const navItemAdmin = {
      path: ['/account', 'admin'],
      text: 'Administração',
      icon: 'admin_panel_settings',
    };

    this.authFacade.level$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((account) => {
        if (account) {
          if (account.isBoard) {
            this.navFacade.addItem(navItemBoard);
          }
          if (account.isWorthy || account.isBoard) {
            this.navFacade.addItem(navItemAdmin);
          }
        }
      });

    this.authFacade.loadAuthUser();
  }

  onLogout() {
    this.authFacade.signOut();
    this.navFacade.reset();
    this.router.navigateByUrl('/account/auth');
  }

  ngOnDestroy() {
    this.mobileQuery.removeEventListener('change', this.#mobileQueryListener);
  }
}
