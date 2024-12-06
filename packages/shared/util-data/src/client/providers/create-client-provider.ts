import {
  Type,
  TypeConstructorParams,
  AbstractConstructorParams,
} from '@devmx/shared-api-interfaces';

export function createClientProvider<T extends Type>(
  constructor: T,
  dependencies: TypeConstructorParams<T> | AbstractConstructorParams<T>
) {
  return {
    provide: constructor,
    useFactory(...params: ConstructorParameters<T>) {
      return new constructor(...params);
    },
    deps: dependencies,
  };
}
