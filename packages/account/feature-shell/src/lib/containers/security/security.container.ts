import { AuthenticationFacade, UserFacade } from '@devmx/account-data-access';
import { inject, Component, ChangeDetectionStrategy } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CodeFieldComponent } from '@devmx/account-ui-shared';
import { MatButtonModule } from '@angular/material/button';
import { MessageService } from '@devmx/shared-ui-global';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdatePasswordForm } from '../../forms';

@Component({
  selector: 'devmx-security',
  templateUrl: './security.container.html',
  styleUrl: './security.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    CodeFieldComponent,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
  ],
})
export class SecurityContainer {
  userFacade = inject(UserFacade);

  authFacade = inject(AuthenticationFacade);

  messageService = inject(MessageService);

  form = new UpdatePasswordForm();

  constructor() {
    this.authFacade.auth$.pipe(takeUntilDestroyed()).subscribe((auth) => {
      if (auth) this.form.patchValue(auth);
    });
  }

  sendCode() {
    this.authFacade.sendUserCode(this.form.getPassword());
  }

  onSubmit() {
    if (this.form.valid) {
      this.userFacade.updatePassword(this.form.getPassword());

      const message = `Armazenando informações`;
      return this.messageService.open({ message });
    }

    return this.form.markAllAsTouched();
  }
}
