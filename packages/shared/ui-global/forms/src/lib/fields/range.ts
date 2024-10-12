import { RangeOptions } from '../interfaces';
import { Field } from './field';

export class Range<T> extends Field<T> {
  min: number;

  max: number;

  readonly kind = 'range';

  constructor(options: RangeOptions<T>) {
    super(options);
    this.min = options.min;
    this.max = options.max;
  }
}

export function range<T>(options: RangeOptions<T>) {
  return new Range(options);
}
