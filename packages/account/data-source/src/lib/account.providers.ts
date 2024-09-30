import { Type } from '@devmx/shared-api-interfaces';
import {
  provideAccountsFacade,
  provideAccountsService,
  provideAuthFacade,
  provideAuthService,
  provideChangePasswordUseCase,
  provideChangeRolesUseCase,
  provideCryptoService,
  provideFindAccountByIDUseCase,
  provideFindAccountByUsernameUseCase,
  provideFindAccountPresentationsUseCase,
  provideFindAccountsUseCase,
  provideJwtService,
  provideJwtStrategy,
  provideRemoveAccountUseCase,
  provideSignInUseCase,
  provideSignUpUseCase,
  provideUpdateAccountUseCase,
} from './providers';

export function provideAccounts<T>(jwtService: Type<T>) {
  return [
    provideCryptoService(),
    provideJwtService(jwtService),
    provideJwtStrategy(),

    provideAccountsService(),
    provideAuthService(),

    provideSignUpUseCase(),
    provideSignInUseCase(),

    provideFindAccountsUseCase(),
    provideFindAccountByIDUseCase(),
    provideUpdateAccountUseCase(),
    provideRemoveAccountUseCase(),
    provideChangePasswordUseCase(),
    provideFindAccountPresentationsUseCase(),
    provideFindAccountByUsernameUseCase(),
    provideChangeRolesUseCase(),

    provideAccountsFacade(),
    provideAuthFacade(),
  ];
}