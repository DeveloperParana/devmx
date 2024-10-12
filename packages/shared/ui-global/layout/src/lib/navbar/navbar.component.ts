import { LayoutModule, MediaMatcher } from '@angular/cdk/layout';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  input,
  output,
  Component,
  ChangeDetectionStrategy,
  inject,
  ChangeDetectorRef,
  DestroyRef,
} from '@angular/core';

@Component({
  selector: 'devmx-layout-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    LayoutModule,
    RouterLink,
  ],
  standalone: true,
})
export class LayoutNavbarComponent {
  destroyRef = inject(DestroyRef);

  hideToggleButtonLeft = input<boolean | ''>(false);

  hideToggleButtonRight = input<boolean | ''>(false);

  get showToggleButtonLeft() {
    return !(this.hideToggleButtonLeft() || this.hideToggleButtonLeft() === '');
  }

  get showToggleButtonRight() {
    return !(
      this.hideToggleButtonRight() || this.hideToggleButtonRight() === ''
    );
  }

  title = input('devmx');

  toggleLeft = output<void>();

  toggleRight = output<void>();

  mobileQuery: MediaQueryList;

  #mobileQueryListener: () => void;

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
}
