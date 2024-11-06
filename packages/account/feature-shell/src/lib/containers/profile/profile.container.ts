import { AuthenticationFacade, UserFacade } from '@devmx/account-data-access';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { EditorComponent } from '@devmx/shared-ui-global/editor';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MessageService } from '@devmx/shared-ui-global';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateProfileForm } from '../../forms';
import { take } from 'rxjs';

@Component({
  selector: 'devmx-profile',
  templateUrl: './profile.container.html',
  styleUrl: './profile.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()],
  imports: [
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    EditorComponent,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
  ],
  standalone: true,
})
export class ProfileContainer {
  userFacade = inject(UserFacade);

  authFacade = inject(AuthenticationFacade);

  messageService = inject(MessageService);

  form = new UpdateProfileForm();

  constructor() {
    const profile$ = this.userFacade.profile$.pipe(takeUntilDestroyed());

    profile$.subscribe((data) => {
      if (data) this.form.patchValue(data);
    });

    this.authFacade.auth$.pipe(take(1)).subscribe((auth) => {
      if (auth) this.userFacade.loadOne(auth.id);
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.userFacade.updateProfile(this.form.getProfile());

      const message = `Armazenando informações`;
      return this.messageService.open({ message });
    }

    return this.form.markAllAsTouched();
  }
}
