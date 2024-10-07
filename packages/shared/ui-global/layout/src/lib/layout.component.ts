import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { LayoutToolbarComponent } from './toolbar/toolbar.component';
import { LayoutNavbarComponent } from './navbar/navbar.component';
import { LayoutModule, MediaMatcher } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import {
  inject,
  signal,
  Component,
  DestroyRef,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    LayoutModule,
    MatSidenavModule,
    LayoutToolbarComponent,
    LayoutNavbarComponent,
    RouterModule,
  ],
  standalone: true,
})
export class LayoutComponent {
  destroyRef = inject(DestroyRef);

  mobileQuery: MediaQueryList;

  #mobileQueryListener: () => void;

  hideToggleButtonLeft = signal(true);
  hideToggleButtonRight = signal(true);

  constructor() {
    const changeDetectorRef = inject(ChangeDetectorRef);
    const media = inject(MediaMatcher);

    this.mobileQuery = media.matchMedia('(max-width: 600px)');

    this.#mobileQueryListener = () => changeDetectorRef.detectChanges();

    if (this.mobileQuery.addEventListener) {
      this.mobileQuery.addEventListener('change', this.#mobileQueryListener);
    }

    this.destroyRef.onDestroy(() => {
      this.mobileQuery.removeEventListener('change', this.#mobileQueryListener);
    });
  }

  openLeft(sidenav: MatSidenav) {
    this.hideToggleButtonLeft.set(false);
    sidenav.open();
  }

  closeLeft(sidenav: MatSidenav) {
    this.hideToggleButtonLeft.set(true);
    sidenav.close();
  }

  openRight(sidenav: MatSidenav) {
    this.hideToggleButtonRight.set(false);
    sidenav.open();
  }

  closeRight(sidenav: MatSidenav) {
    this.hideToggleButtonRight.set(true);
    sidenav.close();
  }
}
