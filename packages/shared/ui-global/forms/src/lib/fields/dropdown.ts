import { DropdownOption, DropdownOptions } from '../interfaces';
import { Field } from './field';

export class Dropdown<T> extends Field<T> {
  options: DropdownOption<T>[];

  readonly kind = 'dropdown';

  constructor(options: DropdownOptions<T>) {
    super(options);
    this.options = options.options;
  }
}

export function dropdown<T>(options: DropdownOptions<T>) {
  return new Dropdown(options);
}
