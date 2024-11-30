import { VisibilityComponent } from './visibility/visibility.component';
import { SelectFileComponent } from '@devmx/shared-ui-global/image';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { debounceTime, filter, skip, take, timer } from 'rxjs';
import { SkillsComponent } from './skills/skills.component';
import { SocialComponent } from './social/social.component';
import { UserPhoto, provideUserPhoto } from '../../dialogs';
import { MatButtonModule } from '@angular/material/button';
import { AvatarComponent } from '@devmx/shared-ui-global';
import { UpdatePhoto } from '@devmx/account-data-access';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserForm } from '../../forms/user';
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
    SkillsComponent,
    VisibilityComponent,
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

  state = signal<string | null>(null);

  i = 0;

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

        console.log((this.i += 1));
      });

    this.authFacade.auth$
      .pipe(
        filter((auth) => !!auth),
        takeUntilDestroyed()
      )
      .subscribe((auth) => this.userFacade.loadOne(auth.id));

    this.form.valueChanges
      .pipe(takeUntilDestroyed(), debounceTime(4000), skip(1))
      .subscribe(() => this.onSubmit());
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
    const timer$ = timer(1000).pipe(take(1));

    if (this.form.valid) {
      const value = this.form.getRawValue() as UpdateUser;
      this.state.set('Salvando...');
      this.userFacade.update(value);

      return timer$.subscribe(() => this.state.set(null));
    }

    this.form.markAllAsTouched();
    return timer$.subscribe(() => this.state.set(null));
  }
}
