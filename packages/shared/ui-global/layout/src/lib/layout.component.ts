import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LayoutToolbarComponent } from './toolbar/toolbar.component';
import { LayoutNavbarComponent } from './navbar/navbar.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { PaginatorComponent } from '@devmx/shared-ui-global';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { Portal, PortalModule } from '@angular/cdk/portal';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { LayoutFacade } from './layout.facade';
import { RouterModule } from '@angular/router';
import { AsyncPipe, NgClass } from '@angular/common';
import {
  inject,
  signal,
  Component,
  DestroyRef,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { skip } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'devmx-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgClass,
    AsyncPipe,
    LayoutModule,
    PortalModule,
    RouterModule,
    MatListModule,
    IconComponent,
    MatBadgeModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatProgressBarModule,
    PaginatorComponent,
    LayoutToolbarComponent,
    LayoutNavbarComponent,
  ],
  standalone: true,
})
export class LayoutComponent {
  destroyRef = inject(DestroyRef);

  hideToggleButtonLeft = signal(true);
  hideToggleButtonRight = signal(true);

  sidenavOutlet?: Portal<unknown>;

  layoutFacade;

  constructor() {
    const changeDetectorRef = inject(ChangeDetectorRef);

    this.layoutFacade = inject(LayoutFacade);

    this.layoutFacade.mobile$
      .pipe(takeUntilDestroyed(), skip(1))
      .subscribe(() => changeDetectorRef.detectChanges());

    this.destroyRef.onDestroy(() => {
      this.layoutFacade.destroyListener();
    });

    this.layoutFacade.component$
      .pipe(takeUntilDestroyed())
      .subscribe((component) => {
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
}
