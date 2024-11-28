import { SelectFileComponent } from '@devmx/shared-ui-global/image';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { SocialComponent } from './social/social.component';
import { UserPhoto, provideUserPhoto } from '../../dialogs';
import { MatButtonModule } from '@angular/material/button';
import { AvatarComponent } from '@devmx/shared-ui-global';
import { UpdatePhoto } from '@devmx/account-data-access';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserForm } from '../../forms/user';
import { filter, take } from 'rxjs';
import {
  inject,
  signal,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  UpdateUser,
  UserFacade,
  AuthenticationFacade,
} from '@devmx/account-data-access';

@Component({
  selector: 'devmx-account',
  templateUrl: './account.container.html',
  styleUrl: './account.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideUserPhoto()],
  imports: [
    ReactiveFormsModule,
    UserComponent,
    ProfileComponent,
    ContactComponent,
    SocialComponent,
    SelectFileComponent,
    MatButtonModule,
    AvatarComponent,
  ],
})
export class AccountContainer {
  authFacade = inject(AuthenticationFacade);
  userFacade = inject(UserFacade);

  userPhoto = inject(UserPhoto);

  form = new UserForm();

  photo = signal('');

  constructor() {
    this.userFacade.selected$
      .pipe(
        filter((user) => !!user),
        take(1)
      )
      .subscribe((user) => {
        if (user.profile?.photo) {
          this.photo.set(user.profile.photo);
        }

        this.form.patch(user);
      });

    this.authFacade.auth$
      .pipe(
        filter((auth) => !!auth),
        takeUntilDestroyed()
      )
      .subscribe((auth) => this.userFacade.loadOne(auth.id));
  }

  changePhoto(file: File) {
    this.userPhoto.open({ file }).closed.subscribe((photo) => {
      const { id, profile } = this.form.getRawValue();

      if (id && photo) {
        const data = { ...profile, id, photo };
        this.userFacade.updatePhoto(data as UpdatePhoto);
        this.photo.set(URL.createObjectURL(photo));
      }
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const value = this.form.getRawValue() as UpdateUser;
      return this.userFacade.update(value);
    }

    return this.form.markAllAsTouched();
  }
}
