import { Component, inject, input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Sidenav } from './sidenav';

@Component({
  selector: 'devmx-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  imports: [
    MatListModule,
    MatIconModule,
    RouterLink,
    AsyncPipe,
  ],
  standalone: true,
})
export class SidenavComponent {
  sidenav = inject(Sidenav);

  header = input('');
}
