import {
  CheckboxOptions,
  DatepickerOptions,
  DropdownOptions,
  FieldOptions,
  RadioOptions,
  RangeOptions,
  SliderOptions,
  TextboxOptions,
} from '../interfaces';

export type FormFieldOptions<T = unknown> =
  | FieldOptions<T>
  | TextboxOptions<T>
  | DropdownOptions<T>
  | CheckboxOptions<T>
  | DatepickerOptions<T>
  | RangeOptions<T>
  | SliderOptions<T>
  | RadioOptions<T>;
