import { inject, Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthenticationFacade } from '@devmx/account-data-access';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MessageService } from '@devmx/shared-ui-global';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CreateUserForm } from '../../forms';

@Component({
  selector: 'devmx-registration',
  templateUrl: './registration.container.html',
  styleUrl: './registration.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    RouterLink,
  ],
  standalone: true,
})
export class RegistrationContainer {
  message = inject(MessageService);

  authFacade = inject(AuthenticationFacade);

  form = new CreateUserForm();

  onSubmit() {
    if (this.form.valid) {
      const value = this.form.getRawValue();
      this.authFacade.createUser(value);

      const message = `Conta ${value.name} criada`;
      this.message.open({ message });
    }
  }
}
