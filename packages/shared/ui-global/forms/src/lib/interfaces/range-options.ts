import { FieldOptions } from './field-options';

export interface RangeOptions<T> extends FieldOptions<T> {
  min: number;
  max: number;
}
