import { CheckboxOptions } from '../interfaces';
import { Field } from './field';

export class Checkbox<T> extends Field<T> {
  checked: boolean;

  readonly kind = 'checkbox';

  constructor(options: CheckboxOptions<T>) {
    super(options);
    this.checked = options.checked == true;
  }
}

export function checkbox<T>(options: CheckboxOptions<T>) {
  return new Checkbox(options);
}
