import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  input,
  output,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-layout-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterLinkActive,
    RouterLink,
  ],
  standalone: true,
})
export class LayoutNavbarComponent {
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
}
