import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { AuthUser } from '@devmx/shared-api-interfaces';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { HasRolePipe } from '../../pipes';
import {
  input,
  output,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-auth-user',
  templateUrl: './auth-user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    RouterLink,
    HasRolePipe
  ],
  standalone: true,
})
export class AuthUserComponent {
  authUser = input<AuthUser | null>();

  logout = output<void>();
}
