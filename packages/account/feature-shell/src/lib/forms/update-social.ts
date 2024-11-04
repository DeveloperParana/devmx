import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormOption, TypedForm } from '@devmx/shared-ui-global/forms';
import { UpdateSocial } from '@devmx/account-data-access';
import { UserSocialList } from './user-social';
import { UserSocialType } from '@devmx/shared-api-interfaces';

export class UpdateSocialForm extends FormGroup<TypedForm<UpdateSocial>> {
  socialOptions: FormOption<UserSocialType>[] = [
    { value: 'website', viewValue: 'Website' },
    { value: 'github', viewValue: 'Github' },
    { value: 'linkedIn', viewValue: 'Linked In' },
    { value: 'whatsApp', viewValue: 'WhatsApp' },
    { value: 'notion', viewValue: 'Notion' },
    { value: 'instagram', viewValue: 'Instagram' },
  ];

  constructor() {
    super({
      id: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      social: new UserSocialList(),
    });
  }

  get social() {
    return this.controls.social as UserSocialList;
  }

  getSocial() {
    return this.getRawValue() as UpdateSocial;
  }

  patch(value: Partial<UpdateSocial>) {
    this.patchValue(value);

    if (value.social && value.social.length) {
      this.social.clear();

      for (const social of value.social) {
        this.social.add(social);
      }
    }
  }
}
