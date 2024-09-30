import { PresentationFacade } from '@devmx/presentation-data-access';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LayoutModule, MediaMatcher } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { AuthFacade } from '@devmx/account-data-access';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import {
  Sidenav,
  AuthUserComponent,
  SidenavComponent,
  ToolbarComponent,
} from '@devmx/shared-ui-global';
import {
  inject,
  OnInit,
  Component,
  OnDestroy,
  DestroyRef,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-account-feature-shell',
  templateUrl: './account-feature-shell.component.html',
  styleUrl: './account-feature-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ToolbarComponent,
    SidenavComponent,
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

  sidenav = inject(Sidenav);

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
    this.authFacade.user$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((user) => {
        if (user) this.sidenav.setRoles(user.roles);
      });

    this.authFacade.loadAuthUser();
  }

  onLogout() {
    this.authFacade.signOut();
    this.sidenav.resetRoles();
    this.router.navigateByUrl('/account/auth');
  }

  ngOnDestroy() {
    this.mobileQuery.removeEventListener('change', this.#mobileQueryListener);
  }
}
