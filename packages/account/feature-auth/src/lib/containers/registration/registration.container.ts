import { inject, Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthenticationFacade } from '@devmx/account-data-access';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DialogFacade } from '@devmx/shared-ui-global/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MessageService } from '@devmx/shared-ui-global';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CreateUserForm } from '../../forms';
import { take } from 'rxjs';

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
    RouterModule,
  ],
})
export class RegistrationContainer {
  authFacade = inject(AuthenticationFacade);

  message = inject(MessageService);

  dialog = inject(DialogFacade);

  route = inject(ActivatedRoute);

  router = inject(Router);

  form = new CreateUserForm();

  onSubmit() {
    if (this.form.valid) {
      const value = this.form.getRawValue();
      const create$ = this.authFacade.createUser(value);
      create$.pipe(take(1)).subscribe(() => {
        const { redirectTo } = this.route.snapshot.queryParams;

        const queryParams = { redirectTo };
        const path = ['/', 'conta', 'autenticacao', 'acessar'];
        this.router.navigate(path, { queryParams });
      });

      const message = `Conta ${value.name} criada`;
      this.message.open({ message });
    }
  }

  openConduteCode() {
    this.dialog
      .readMe(
        `https://raw.githubusercontent.com/DeveloperParana/conduta/refs/heads/master/README.md`
      )
      .subscribe();
  }
}
