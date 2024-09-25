import { Type } from '@devmx/shared-api-interfaces';
import {
  provideAccountsFacade,
  provideAccountsService,
  provideAuthFacade,
  provideAuthService,
  provideChangePasswordUseCase,
  provideChangeRolesUseCase,
  provideCitiesFacade,
  provideCitiesService,
  provideCryptoService,
  provideFindAccountByIDUseCase,
  provideFindAccountByUsernameUseCase,
  provideFindAccountPresentationsUseCase,
  provideFindAccountsUseCase,
  provideFindCitiesUseCase,
  provideFindCityByIDUseCase,
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
    provideCitiesService(),
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

    provideFindCitiesUseCase(),
    provideFindCityByIDUseCase(),

    provideAccountsFacade(),
    provideCitiesFacade(),
    provideAuthFacade(),
  ];
}
