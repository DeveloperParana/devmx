import {
  Type,
  UseCase,
  AbstractConstructorParams,
} from '@devmx/shared-api-interfaces';

export function createUseCaseProvider<
  T extends Type<UseCase<unknown, unknown>>
>(useCase: T, dependencies: AbstractConstructorParams<T>) {
  return {
    provide: useCase,
    useFactory(...params: ConstructorParameters<T>) {
      return new useCase(...params);
    },
    deps: dependencies,
  };
}
