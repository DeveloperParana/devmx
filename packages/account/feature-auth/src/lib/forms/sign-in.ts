import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TypedForm } from '@devmx/shared-ui-global/forms';
import { SignIn } from '@devmx/shared-api-interfaces';
import { BehaviorSubject } from 'rxjs';

export class SignInForm extends FormGroup<TypedForm<SignIn>> {
  #focus = new BehaviorSubject(false);
  focus$ = this.#focus.asObservable();

  focus() {
    this.#focus.next(true);
  }

  constructor() {
    super(
      {
        username: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required],
        }),
        password: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required, Validators.minLength(6)],
        }),
      },
      { updateOn: 'submit' }
    );
  }
}
