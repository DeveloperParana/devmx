import { Type, TypeConstructorParams } from '@devmx/shared-api-interfaces';

export function createClientProvider<T extends Type>(
  constructor: T,
  dependencies: TypeConstructorParams<T>
) {
  return {
    provide: constructor,
    useFactory(...params: ConstructorParameters<T>) {
      return new constructor(...params);
    },
    deps: dependencies,
  };
}
