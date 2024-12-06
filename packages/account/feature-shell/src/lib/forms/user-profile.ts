import { FormOption, TypedForm } from '@devmx/shared-ui-global/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Gender, UserProfile } from '@devmx/shared-api-interfaces';

export class UserProfileForm extends FormGroup<TypedForm<UserProfile>> {
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
      minibio: new FormControl('', {
        nonNullable: true,
        validators: [Validators.maxLength(102400)],
      }),
      birthday: new FormControl(),
      gender: new FormControl(),
      photo: new FormControl(),
    });
  }
}
