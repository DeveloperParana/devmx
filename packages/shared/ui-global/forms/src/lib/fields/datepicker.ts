import { DatepickerOptions } from '../interfaces';
import { Field } from './field';

export class Datepicker<T> extends Field<T> {
  min?: Date;

  max?: Date;

  readonly kind = 'datepicker';

  constructor(options: DatepickerOptions<T>) {
    super(options);
    this.min = options.min;
    this.max = options.max;
  }
}

export function datepicker<T>(options: DatepickerOptions<T>) {
  return new Datepicker(options);
}
