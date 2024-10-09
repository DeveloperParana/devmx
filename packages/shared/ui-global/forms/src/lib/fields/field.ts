import { FieldOptions } from '../interfaces';
import { FieldKind, ValidatorKey } from '../types';

export abstract class Field<T> {
  label: string;

  value: T | null;

  order: number;

  autocomplete?: AutoFill;

  abstract kind: FieldKind;

  errors: Partial<Record<ValidatorKey, string>>;

  constructor(options: FieldOptions<T>) {
    this.autocomplete = options.autocomplete;
    this.label = options.label;
    this.value = options.value ?? null;
    this.order = options.order ?? 0;
    this.errors = options.errors ?? {};
  }
}
