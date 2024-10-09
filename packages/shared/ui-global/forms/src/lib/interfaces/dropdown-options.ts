import { FieldOptions } from './field-options';

export interface DropdownOption<T> {
  value: T;
  text: string;
}

export interface DropdownOptions<T> extends FieldOptions<T> {
  options: DropdownOption<T>[];
}
