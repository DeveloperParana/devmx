import { Type } from '@devmx/shared-api-interfaces';
import {
  provideAccountsFacade,
  provideAccountsService,
  provideAuthFacade,
  provideAuthService,
  provideCryptoService,
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

    provideAccountsFacade(),
    provideAuthFacade(),
  ];
}
