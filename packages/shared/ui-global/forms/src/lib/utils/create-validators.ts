import { ValidatorFn, Validators } from '@angular/forms';
import { keys } from '@devmx/shared-util-data';
import { FormField } from '../types';

export function createValidators<T>(field: FormField<T>) {
  const supportedValidators = ['required', 'requiredTrue', 'email'];
  return keys(field.errors)
    .filter((key) => supportedValidators.includes(key))
    .map((key) => Validators[key]) as ValidatorFn[];
}
