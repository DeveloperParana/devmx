import { AuthUserComponent, ToolbarComponent } from '@devmx/shared-ui-global';
import { PresentationFacade } from '@devmx/presentation-data-access';
import { LayoutModule, MediaMatcher } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { AccountNavFacade, AuthFacade } from '@devmx/account-data-access';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import {
  inject,
  OnInit,
  OnDestroy,
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  DestroyRef,
} from '@angular/core';

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

  // navigation = this.navService.getFeatureNav('account');

  constructor() {
    const changeDetectorRef = inject(ChangeDetectorRef);
    const media = inject(MediaMatcher);

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.#mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this.#mobileQueryListener);
  }

  ngOnInit() {
    const navItem = {
      path: ['/account', 'board'],
      text: 'Administração',
      icon: 'admin_panel_settings',
    };

    this.authFacade.level$.subscribe((account) => {
      if (account && account.isBoard) {
        this.navFacade.addItem(navItem);
      }
    });

    this.authFacade.loadAuthUser();
  }

  onLogout() {
    this.authFacade.clearAccessToken();
    this.router.navigateByUrl('/account/auth');
  }

  ngOnDestroy() {
    this.mobileQuery.removeEventListener('change', this.#mobileQueryListener);
  }
}
