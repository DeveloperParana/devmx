import { FieldOptions } from './field-options';

export interface DatepickerOptions<T> extends FieldOptions<T> {
  min?: Date;
  max?: Date;
}
