import { FieldOptions } from './field-options';

export interface SliderOptions<T> extends FieldOptions<T> {
  min: number;
  max: number;
  step?: number;
}
