import { FormField } from './form-field';

type DetectType<T> = T extends Array<infer U>
  ? DetectType<U>[]
  : T extends object
  ? TypedFields<T>
  : T extends string
  ? // ? FormField<T | ''>
    FormField<T | string>
  : FormField<T>;

export type TypedFields<T> = {
  [K in keyof T]: DetectType<T[K]>;
};
