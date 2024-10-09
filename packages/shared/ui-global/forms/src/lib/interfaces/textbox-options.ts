import { FieldOptions } from './field-options';
import { ControlType } from '../types';

export interface TextboxOptions<T> extends FieldOptions<T> {
  type: ControlType;
}
