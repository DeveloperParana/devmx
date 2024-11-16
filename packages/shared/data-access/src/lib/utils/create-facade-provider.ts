import {
  Type,
  Abstract,
  TypeConstructorParams,
  AbstractConstructorParams,
} from '@devmx/shared-api-interfaces';

export function createFacadeProvider<A extends Abstract, T extends Type>(
  constructor: A,
  implementation: T,
  dependencies: TypeConstructorParams<T> | AbstractConstructorParams<T>
) {
  return {
    provide: constructor,
    useFactory(...params: ConstructorParameters<T>) {
      return new implementation(...params);
    },
    deps: dependencies,
  };
}
