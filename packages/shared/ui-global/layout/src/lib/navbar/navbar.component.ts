import { CrumbsComponent, provideCrumbs } from '@devmx/shared-ui-global/crumbs';
import { input, Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'devmx-layout-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideCrumbs()],
  imports: [
    RouterLinkActive,
    MatToolbarModule,
    CrumbsComponent,
    IconComponent,
    RouterLink,
  ],
  standalone: true,
})
export class LayoutNavbarComponent {
  title = input('devparana . mx');
}
