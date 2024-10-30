import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LayoutToolbarComponent } from './toolbar/toolbar.component';
import { LayoutNavbarComponent } from './navbar/navbar.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { AsyncPipe, NgClass } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { LayoutFacade } from './layout.facade';
import { RouterModule } from '@angular/router';
import { skip } from 'rxjs';
import {
  inject,
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
    NgClass,
    AsyncPipe,
    LayoutModule,
    RouterModule,
    MatListModule,
    IconComponent,
    MatBadgeModule,
    MatButtonModule,
    MatSidenavModule,
    MatProgressBarModule,
    LayoutToolbarComponent,
    LayoutNavbarComponent,
  ],
  standalone: true,
})
export class LayoutComponent {
  destroyRef = inject(DestroyRef);

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
  }
}
