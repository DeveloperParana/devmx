import { FieldOptions } from './field-options';

export interface CheckboxOptions<T> extends Omit<FieldOptions<T>, 'errors'> {
  checked?: boolean;
}
