import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Form, FormOption } from '@devmx/shared-ui-global/forms';
import { City, Gender } from '@devmx/shared-api-interfaces';
import { UpdateAccount } from '@devmx/account-data-access';

export interface UpdateAccountWithCity extends Omit<UpdateAccount, 'city'> {
  city: City;
}

export class UpdateAccountForm extends Form<UpdateAccount> {
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
      name: new FormGroup({
        first: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required],
        }),
        last: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required],
        }),
      }),
      username: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)],
      }),
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      birthday: new FormControl('', {
        nonNullable: true,
      }),
      gender: new FormControl('', {
        nonNullable: true,
      }),
      minibio: new FormControl('', {
        nonNullable: true,
      }),
      photo: new FormControl('', {
        nonNullable: true,
      }),
      city: new FormControl('', {
        nonNullable: true,
      }),
      active: new FormControl(),
    });
  }
}
