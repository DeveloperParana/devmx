import { FormFieldBase, FormFieldBaseOptions } from './base';

export interface CheckboxFormFieldOptions<T>
  extends Omit<FormFieldBaseOptions<T>, 'type'> {
  checked: boolean;
}

export class CheckboxFormField<T> extends FormFieldBase<T> {
  checked: boolean;

  readonly type = 'checkbox'

  constructor(options: CheckboxFormFieldOptions<T>) {
    super(options);
    this.checked = options.checked;
  }
}
