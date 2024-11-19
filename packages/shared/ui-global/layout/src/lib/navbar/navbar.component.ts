import { CrumbsComponent, provideCrumbs } from '@devmx/shared-ui-global/crumbs';
import { input, Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'devmx-layout-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideCrumbs()],
  imports: [MatToolbarModule, CrumbsComponent, IconComponent, RouterLink],
})
export class LayoutNavbarComponent {
  title = input('devparana . mx');
}
