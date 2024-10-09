import { FormOption, TypedForm } from '@devmx/shared-ui-global/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Gender, SignUp } from '@devmx/shared-api-interfaces';
import { signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class SignUpForm extends FormGroup<TypedForm<SignUp>> {
  genders: FormOption<Gender>[] = [
    { value: 'female', viewValue: 'Feminino' },
    { value: 'male', viewValue: 'Masculino' },
    { value: 'non-binary', viewValue: 'Não binário' },
    { value: 'gender-fluid', viewValue: 'Gênero fluído' },
    { value: 'agender', viewValue: 'Agênero' },
    { value: 'prefer-not-to-say', viewValue: 'Prefiro não dizer' },
    { value: '', viewValue: 'Outro' },
  ];

  #focus = new BehaviorSubject(false);
  focus$ = this.#focus.asObservable();

  focus() {
    this.#focus.next(true);
  }

  checkingUsername = signal(false);

  constructor() {
    super({
      name: new FormGroup({
        first: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required],
          updateOn: 'submit',
        }),
        last: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required],
          updateOn: 'submit',
        }),
      }),
      username: new FormControl('', {
        nonNullable: true,
        updateOn: 'blur',
        validators: [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)],
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(6)],
      }),
      email: new FormControl('', {
        nonNullable: true,
        updateOn: 'blur',
        validators: [Validators.required, Validators.email],
      }),
      gender: new FormControl('female', {
        nonNullable: true,
        updateOn: 'submit',
      }),
      minibio: new FormControl('', {
        nonNullable: true,
        updateOn: 'submit',
      }),
      birthday: new FormControl('', {
        nonNullable: true,
        updateOn: 'submit',
      }),
    });
  }

  setUsernameError(notUnique: boolean) {
    const error = notUnique ? { notUnique } : null;
    this.controls.username.setErrors(error);
    this.checkingUsername.set(false);
  }
}
