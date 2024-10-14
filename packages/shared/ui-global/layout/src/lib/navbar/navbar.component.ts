import { CrumbsComponent, provideCrumbs } from '@devmx/shared-ui-global/crumbs';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {
  input,
  output,
  inject,
  Component,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-layout-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideCrumbs()],
  imports: [
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    CrumbsComponent,
    IconComponent,
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

  title = input('Portal DevMX');

  toggleLeft = output<void>();

  toggleRight = output<void>();
}
