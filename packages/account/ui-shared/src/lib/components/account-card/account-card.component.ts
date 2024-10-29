import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { AccountOut } from '@devmx/shared-api-interfaces';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { PhotoPipe } from '@devmx/shared-ui-global';
import { KeyValuePipe } from '@angular/common';
import { RolePipe } from '../../pipes';

@Component({
  selector: 'devmx-account-card',
  templateUrl: './account-card.component.html',
  styleUrl: './account-card.component.scss',
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
export class AccountCardComponent {
  data = input.required<AccountOut>();

  get account() {
    return this.data();
  }
}
