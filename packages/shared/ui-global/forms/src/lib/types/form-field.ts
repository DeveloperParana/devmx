import {
  Checkbox,
  Dropdown,
  Datepicker,
  Radio,
  Textbox,
  Range,
  Slider,
} from '../fields';

export type FormField<T = unknown> =
  | Textbox<T>
  | Dropdown<T>
  | Checkbox<T>
  | Radio<T>
  | Datepicker<T>
  | Range<T>
  | Slider<T>;
