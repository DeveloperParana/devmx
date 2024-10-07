import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { HasRolePipe } from '@devmx/shared-ui-global';
import { OverlayModule } from '@angular/cdk/overlay';
import { AsyncPipe } from '@angular/common';
import { LayoutToolbar } from './toolbar';
import {
  signal,
  inject,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-layout-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatToolbarModule,
    MatCardModule,
    OverlayModule,
    MatButtonModule,
    MatIconModule,
    RouterLinkActive,
    MatListModule,
    RouterLink,
    AsyncPipe,
    HasRolePipe,
  ],
  standalone: true,
})
export class LayoutToolbarComponent {
  toolbar = inject(LayoutToolbar);

  year = new Date().getFullYear();

  accountOverlayOpened = signal(false);

  toggleOverlay() {
    const state = !this.accountOverlayOpened();
    this.accountOverlayOpened.set(state);
  }
}
