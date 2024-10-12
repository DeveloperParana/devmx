import { CrumbsComponent, provideCrumbs } from '@devmx/shared-ui-global/crumbs';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { LayoutToolbarComponent } from './toolbar/toolbar.component';
import { LayoutNavbarComponent } from './navbar/navbar.component';
import { Portal, PortalModule } from '@angular/cdk/portal';
import { LayoutModule } from '@angular/cdk/layout';
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
import { AsyncPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
    AsyncPipe,
  ],
  standalone: true,
})
export class LayoutComponent {
  destroyRef = inject(DestroyRef);

  viewContainerRef = inject(ViewContainerRef);

  hideToggleButtonLeft = signal(true);
  hideToggleButtonRight = signal(true);

  sidenavOutlet?: Portal<unknown>;

  layout = inject(Layout);

  constructor() {
    const changeDetectorRef = inject(ChangeDetectorRef);

    this.layout.mobileQuery$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => changeDetectorRef.detectChanges());

    this.destroyRef.onDestroy(() => {
      this.layout.destroy();
    });

    this.layout.component$.subscribe((component) => {
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
    this.hideToggleButtonRight.set(false);
    sidenav.open();
  }

  closeRight(sidenav: MatSidenav) {
    this.hideToggleButtonRight.set(true);
    sidenav.close();
  }
}
