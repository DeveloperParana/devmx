import { provideFacades, provideServices, provideUseCases } from './providers';
import { Type } from '@devmx/shared-api-interfaces';

export function provideAccounts<T>(jwtService: Type<T>) {
  return [
    ...provideServices(jwtService),

    ...provideUseCases(),

    ...provideFacades(),
  ];
}
