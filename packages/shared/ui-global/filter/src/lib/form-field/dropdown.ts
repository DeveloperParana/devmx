import { FormFieldBase, FormFieldBaseOptions } from './base';

export interface DropDownFormFieldOption<T> {
  value: T;
  viewValue: string;
}

export interface DropdownFormFieldOptions<T>
  extends Omit<FormFieldBaseOptions<T>, 'type'> {
  options: DropDownFormFieldOption<T>[];
}

export class DropdownFormField<T> extends FormFieldBase<T> {
  options: DropDownFormFieldOption<T>[];

  readonly type = 'dropdown';

  constructor(options: DropdownFormFieldOptions<T>) {
    super(options);
    this.options = options.options;
  }
}
