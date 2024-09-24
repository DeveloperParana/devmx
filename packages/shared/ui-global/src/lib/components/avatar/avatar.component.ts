import { Env } from '@devmx/shared-api-interfaces/client';
import {
  input,
  inject,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-avatar',
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class AvatarComponent {
  env = inject(Env);

  color = input('#333');

  src = input<string>();

  get path() {
    return `${this.env.photos.url}/${this.src()}`;
  }
}
