import { FormOption, TypedForm } from '@devmx/shared-ui-global/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UpdateProfile } from '@devmx/account-data-access';
import { Gender } from '@devmx/shared-api-interfaces';

export class UpdateProfileForm extends FormGroup<TypedForm<UpdateProfile>> {
  genders: FormOption<Gender>[] = [
    { value: 'female', viewValue: 'Feminino' },
    { value: 'male', viewValue: 'Masculino' },
    { value: 'non-binary', viewValue: 'Não binário' },
    { value: 'gender-fluid', viewValue: 'Gênero fluído' },
    { value: 'agender', viewValue: 'Agênero' },
    { value: 'prefer-not-to-say', viewValue: 'Prefiro não dizer' },
    { value: '', viewValue: 'Outro' },
  ];

  get gender() {
    return this.controls.gender;
  }

  constructor() {
    super({
      id: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      minibio: new FormControl(),
      birthday: new FormControl(),
      gender: new FormControl(),
    });
  }

  getProfile() {
    return this.getRawValue() as UpdateProfile;
  }
}
