import { FormFieldOptions } from './form-field-options';

type DetectType<T> = T extends Array<infer U>
  ? DetectType<U>[]
  : T extends object
  ? TypedFieldOptions<T>
  : FormFieldOptions<T>;

export type TypedFieldOptions<T> = {
  [K in keyof T]: DetectType<T[K]>;
};
