import { LayoutModule, MediaMatcher } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import {
  inject,
  OnDestroy,
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ToolbarComponent } from '@devmx/shared-ui-global';

@Component({
  selector: 'devmx-account-feature-shell',
  templateUrl: './account-feature-shell.component.html',
  styleUrl: './account-feature-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ToolbarComponent,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
    RouterModule,
  ],
  standalone: true,
})
export class AccountFeatureShellComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  #mobileQueryListener: () => void;

  constructor() {
    const changeDetectorRef = inject(ChangeDetectorRef);
    const media = inject(MediaMatcher);

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.#mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this.#mobileQueryListener);
  }

  ngOnDestroy() {
    this.mobileQuery.removeEventListener('change', this.#mobileQueryListener);
  }
}
