import { CrumbsComponent, provideCrumbs } from '@devmx/shared-ui-global/crumbs';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { LayoutToolbarComponent } from './toolbar/toolbar.component';
import { LayoutNavbarComponent } from './navbar/navbar.component';
import { LayoutModule, MediaMatcher } from '@angular/cdk/layout';
import { Portal, PortalModule } from '@angular/cdk/portal';
import { RouterModule } from '@angular/router';
import {
  inject,
  signal,
  Component,
  DestroyRef,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  ViewContainerRef,
} from '@angular/core';
import { Layout } from './layout';

@Component({
  selector: 'devmx-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideCrumbs()],
  imports: [
    LayoutModule,
    PortalModule,
    RouterModule,
    CrumbsComponent,
    MatSidenavModule,
    LayoutToolbarComponent,
    LayoutNavbarComponent,
  ],
  standalone: true,
})
export class LayoutComponent {
  destroyRef = inject(DestroyRef);

  viewContainerRef = inject(ViewContainerRef);

  mobileQuery: MediaQueryList;

  #mobileQueryListener: () => void;

  hideToggleButtonLeft = signal(true);
  hideToggleButtonRight = signal(true);

  sidenavOutlet?: Portal<unknown>;

  layout = inject(Layout);

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

    this.layout.component$.subscribe((component) => {
      console.log(component);
      if (component) {
        this.sidenavOutlet = component;
        this.hideToggleButtonLeft.set(false);
      }
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
    console.log(sidenav);

    this.hideToggleButtonRight.set(false);
    sidenav.open();
  }

  closeRight(sidenav: MatSidenav) {
    this.hideToggleButtonRight.set(true);
    sidenav.close();
  }
}
