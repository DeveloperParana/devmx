import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'devmx-avatar',
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class AvatarComponent {
  #sizes = {
    small: 36,
    medium: 48,
    large: 64,
  };

  src = input();

  color = input('#333');
}
