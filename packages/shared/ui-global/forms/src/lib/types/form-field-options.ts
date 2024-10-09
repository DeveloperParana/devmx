import {
  CheckboxOptions,
  DropdownOptions,
  FieldOptions,
  RadioOptions,
  TextboxOptions,
} from '../interfaces';

export type FormFieldOptions<T = unknown> =
  | FieldOptions<T>
  | TextboxOptions<T>
  | DropdownOptions<T>
  | CheckboxOptions<T>
  | RadioOptions<T>;
