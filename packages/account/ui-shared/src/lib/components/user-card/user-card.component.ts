import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { User } from '@devmx/shared-api-interfaces';
import { PhotoPipe } from '@devmx/shared-ui-global';
import { KeyValuePipe } from '@angular/common';
import { RolePipe } from '../../pipes';

@Component({
  selector: 'devmx-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatCardModule,
    MatListModule,
    IconComponent,
    KeyValuePipe,
    PhotoPipe,
    RolePipe,
  ],
  standalone: true,
})
export class UserCardComponent {
  data = input.required<User>();

  get user() {
    return this.data();
  }
}
