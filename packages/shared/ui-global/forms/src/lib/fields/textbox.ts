import { TextboxOptions } from '../interfaces';
import { ControlType } from '../types';
import { Field } from './field';

export class Textbox<T> extends Field<T> {
  type: ControlType;

  readonly kind = 'textbox';

  constructor(options: TextboxOptions<T>) {
    super(options);
    this.type = options.type;
  }
}

export function textbox<T>(options: TextboxOptions<T>) {
  return new Textbox(options);
}
