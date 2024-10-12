import { SliderOptions } from '../interfaces';
import { Field } from './field';

export class Slider<T> extends Field<T> {
  min: number;

  max: number;

  step: number;

  readonly kind = 'slider';

  constructor(options: SliderOptions<T>) {
    super(options);
    this.min = options.min;
    this.max = options.max;
    this.step = options.step ?? 1;
  }
}

export function slider<T>(options: SliderOptions<T>) {
  return new Slider(options);
}
