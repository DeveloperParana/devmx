import { FieldOptions } from './field-options';

export interface RadioOption<T> {
  value: T;
  text: string;
}

export interface RadioOptions<T> extends Omit<FieldOptions<T>, 'errors'> {
  options: RadioOption<T>[];
}
