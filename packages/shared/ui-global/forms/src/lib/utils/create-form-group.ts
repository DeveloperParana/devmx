import { FormField, TypedFields, TypedForm } from '../types';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { createValidators } from './create-validators';
import { entries } from '@devmx/shared-util-data';
import { isFormField } from './is-form-field';

function createFormControl<T>(field: FormField<T>) {
  const validators = createValidators(field);
  const options = { nonNullable: true, validators };
  return new FormControl(field.value, options);
}

function createTypedForm<T>(fields: TypedFields<T>): TypedForm<T> {
  return entries(fields).reduce((prev, [name, curr]) => {
    if (isFormField(curr)) {
      const control = createFormControl(curr);
      return { ...prev, [name]: control };
    }

    if (Array.isArray(curr)) {
      const controls = curr.map((c) => createFormControl(c));
      return { ...prev, [name]: new FormArray(controls) };
    }

    const controls = createTypedForm(curr as TypedFields<T[keyof T]>);
    return { ...prev, [name]: new FormGroup(controls) };
  }, {}) as TypedForm<T>;
}

export function createFormGroup<T extends object>(
  fields: TypedFields<T>
): FormGroup<TypedForm<T>> {
  const controls = createTypedForm(fields);
  return new FormGroup<TypedForm<T>>(controls);
}
