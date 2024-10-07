import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
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
  imports: [MatListModule, MatIconModule, RouterLink, AsyncPipe],
  standalone: true,
})
export class LayoutSidenavComponent {
  sidenav = inject(LayoutSidenav);

  header = input('');
}
