import { FormFieldBase, FormFieldBaseOptions } from './base';

export type TextboxFormFieldControlType = 'text' | 'number';

export interface TextboxFormFieldOptions<T>
  extends Omit<FormFieldBaseOptions<T>, 'type'> {
  controlType: TextboxFormFieldControlType;
}

export class TextboxFormField<T> extends FormFieldBase<T> {
  controlType: TextboxFormFieldControlType;

  readonly type = 'textbox'

  constructor(options: TextboxFormFieldOptions<T>) {
    super(options);
    this.controlType = options.controlType;
  }
}
