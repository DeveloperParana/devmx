import { Fn } from "../types/index";

/* eslint-disable @typescript-eslint/no-explicit-any */
export async function isValid<T extends Fn | string>(validator: T, value: string) {
  if (typeof validator === 'function') {
    const res = validator(value);
    if (res instanceof Promise) return await res;
    else return res;
  }
  // the validator can be a single value too
  return validator === value;
}
