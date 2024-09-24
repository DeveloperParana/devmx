import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { AuthUser } from "@devmx/shared-api-interfaces";

@Component({
  selector: 'devmx-auth-user',
  templateUrl: './auth-user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class AuthUserComponent {
  authUser = input<AuthUser>
}
