import { ValidatorKey } from '../types';

export interface FieldOptions<T> {
  value?: T;
  label: string;
  order?: number
  autocomplete?: AutoFill;
  errors?: Partial<Record<ValidatorKey, string>>;
}
