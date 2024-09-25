import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormOption, TypedForm } from '@devmx/shared-ui-global';
import { authenticator } from '@devmx/shared-util-authn/device';
import { map, Observable, startWith } from 'rxjs';

export interface Authenticator {
  authenticator: string;
}

export class AuthOptionsForm extends FormGroup<TypedForm<Authenticator>> {
  #options: FormOption<string>[] = Object.entries(authenticator).map(
    ([value, viewValue]) => ({ value, viewValue })
  );

  options$: Observable<FormOption<string>[]>;

  constructor() {
    super({
      authenticator: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });

    const valueChanges$ = this.controls.authenticator.valueChanges;
    this.options$ = valueChanges$.pipe(startWith(''), map(this.#normalize));
  }

  displayFn = (option: FormOption<string>) => {
    return option && option.viewValue ? option.viewValue : '';
  };

  #normalize = (option: string | FormOption<string>) => {
    const viewValue = typeof option === 'string' ? option : option.viewValue;
    return viewValue ? this.#filter(viewValue) : this.#options.slice();
  };

  #filter = (value = '') => {
    const filterValue = value.toLowerCase();

    return this.#options.filter((authenticator) => {
      return authenticator.viewValue.toLowerCase().includes(filterValue);
    });
  };
}
