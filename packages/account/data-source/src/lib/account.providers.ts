import { Type } from '@devmx/shared-api-interfaces';
import {
  provideAccountsService,
  provideAuthService,
  provideCryptoService,
  provideFacades,
  provideJwtService,
  provideJwtStrategy,
  provideUseCases,
} from './providers';

export function provideAccounts<T>(jwtService: Type<T>) {
  return [
    provideCryptoService(),
    provideJwtService(jwtService),
    provideJwtStrategy(),

    provideAccountsService(),
    provideAuthService(),

    ...provideUseCases(),

    ...provideFacades(),
  ];
}
