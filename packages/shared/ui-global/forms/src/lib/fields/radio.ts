import { RadioOption, RadioOptions } from '../interfaces';
import { Field } from './field';

export class Radio<T> extends Field<T> {
  options: RadioOption<T>[];

  readonly kind = 'radio';

  constructor(options: RadioOptions<T>) {
    super(options);
    this.options = options.options;
  }
}

export function radio<T>(options: RadioOptions<T>) {
  return new Radio(options);
}
