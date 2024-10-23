import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatListModule } from '@angular/material/list';
import { AsyncPipe } from '@angular/common';
import { LayoutSidenav } from './sidenav';
import {
  input,
  inject,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-layout-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatListModule,
    IconComponent,
    RouterLink,
    RouterLinkActive,
    AsyncPipe,
  ],
  standalone: true,
})
export class LayoutSidenavComponent {
  sidenav = inject(LayoutSidenav);

  header = input('');
}
