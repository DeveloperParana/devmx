import { LayoutModule, MediaMatcher } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import {
  inject,
  signal,
  Component,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatSidenavModule, LayoutModule],
  standalone: true,
})
export class AppShellComponent {
  destroyRef = inject(DestroyRef);
  isMobile = signal(false);
  media = inject(MediaMatcher);

  constructor() {
    const mediaQuery = this.media.matchMedia('(max-width: 600px)');

    const mediaQueryListener = (ev: MediaQueryListEvent) => {
      this.isMobile.set(ev.matches);
    };

    mediaQuery.addEventListener('change', mediaQueryListener);

    this.destroyRef.onDestroy(() => {
      mediaQuery.removeEventListener('change', mediaQueryListener);
    });
  }
}
