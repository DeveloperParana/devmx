/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fn, Type } from '@devmx/shared-api-interfaces';

export const is = {
  fn<T>(value: any): value is Fn<T> {
    return typeof value === 'function';
  },
  asyncFn<T>(value: any): value is Fn<Promise<T>> {
    return this.fn(value) && value.constructor.name === 'AsyncFunction';
  },
  string(value: any): value is string {
    return typeof value === 'string';
  },
  type<T>(value: any): value is Type<T> {
    return this.fn(value) && typeof value.prototype === 'object';
  },
};
