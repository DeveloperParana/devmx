import type { Abstract, Fn, Type } from '@devmx/shared-api-interfaces';
import type { Token } from './token';

export type For<T> = Abstract<T> | Type<T> | Token<T>;

export type Use<T> = T | Type<T> | Fn<T> | Fn<Promise<T>>;

export type Add<T> = T extends Abstract<infer U>
  ? For<U | unknown>[]
  : T extends Type<infer U>
  ? ConstructorParameters<Type<U>>
  : unknown[];

export interface Provider<T> {
  for: For<T>;
  use?: Use<T>;
  add?: Add<T>;
}
