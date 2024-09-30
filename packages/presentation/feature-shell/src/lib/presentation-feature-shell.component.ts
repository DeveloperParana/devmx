import { AuthUserComponent, ToolbarComponent } from '@devmx/shared-ui-global';
import { PresentationFacade } from '@devmx/presentation-data-access';
import { LayoutModule, MediaMatcher } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { AuthFacade } from '@devmx/account-data-access';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router, RouterModule } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import {
  inject,
  OnInit,
  Component,
  OnDestroy,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-presentation-feature-shell',
  templateUrl: './presentation-feature-shell.component.html',
  styleUrl: './presentation-feature-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ToolbarComponent,
    AuthUserComponent,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
    RouterModule,
    AsyncPipe,
  ],
  standalone: true,
})
export class PresentationFeatureShellComponent implements OnInit, OnDestroy {
  authFacade = inject(AuthFacade);
  router = inject(Router);

  mobileQuery: MediaQueryList;

  #mobileQueryListener: () => void;

  presentationFacade = inject(PresentationFacade);

  constructor() {
    const changeDetectorRef = inject(ChangeDetectorRef);
    const media = inject(MediaMatcher);

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.#mobileQueryListener = () => changeDetectorRef.detectChanges();
    if (this.mobileQuery.addEventListener) {
      this.mobileQuery.addEventListener('change', this.#mobileQueryListener);
    }
  }

  ngOnInit() {
    this.authFacade.loadAuthUser();
  }

  onLogout() {
    this.authFacade.signOut();
    this.router.navigateByUrl('/account/auth');
  }

  ngOnDestroy() {
    if (this.mobileQuery.removeEventListener) {
      this.mobileQuery.removeEventListener('change', this.#mobileQueryListener);
    }
  }
}
