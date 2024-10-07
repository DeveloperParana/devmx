export type FormFieldType = 'textbox' | 'checkbox' | 'dropdown';

export interface FormFieldBaseOptions<T> {
  value?: T;
  key: string;
  label: string;
  order: number;
  // type: string;
}

export abstract class FormFieldBase<T> {
  value?: T;

  key: string;

  label: string;

  order: number;

  // abstract type: string;

  constructor(options: FormFieldBaseOptions<T>) {
    this.key = options.key;
    this.label = options.label;
    this.order = options.order;
    // this.type = options.type;
  }
}
