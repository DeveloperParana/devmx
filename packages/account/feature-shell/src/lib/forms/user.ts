import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TypedForm } from '@devmx/shared-ui-global/forms';
import { UpdateUser } from '@devmx/account-data-access';
import { UserProfileForm } from './user-profile';
import { UserContactForm } from './user-contact';
import { UserSocialForm } from './user-social';
import { UserRolesForm } from './user-roles';

export class UserForm extends FormGroup<TypedForm<UpdateUser>> {
  constructor() {
    super({
      id: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.pattern(/^[a-z0-9]+$/)],
      }),
      displayName: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      profile: new UserProfileForm(),
      contact: new UserContactForm(),
      social: new UserSocialForm(),
      active: new FormControl(),
      roles: new UserRolesForm(),
    });
  }

  get profile() {
    return this.controls.profile as UserProfileForm;
  }

  get contact() {
    return this.controls.contact as UserContactForm;
  }

  get social() {
    return this.controls.social as UserSocialForm;
  }

  get roles() {
    return this.controls.roles as UserRolesForm;
  }

  patch(value: Partial<UpdateUser>) {
    this.patchValue(value);

    if (value.social && value.social.length) {
      this.social.patchValue(value.social);
    }
  }
}
