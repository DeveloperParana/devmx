import { createServerProvider } from '@devmx/shared-data-source';
import { AccountsFacade, AuthFacade, CitiesFacade } from '../facades';
import {
  SignInUseCase,
  SignUpUseCase,
  FindAccountsUseCase,
  RemoveAccountUseCase,
  UpdateAccountUseCase,
  ChangePasswordUseCase,
  FindAccountByIDUseCase,
  FindAccountPresentationsUseCase,
  FindCitiesUseCase,
  FindCityByIDUseCase,
  FindAccountByUsernameUseCase,
  ChangeRolesUseCase,
} from '@devmx/account-domain/server';

export function provideAccountsFacade() {
  return createServerProvider(AccountsFacade, [
    FindAccountsUseCase,
    FindAccountByIDUseCase,
    FindAccountByUsernameUseCase,
    UpdateAccountUseCase,
    RemoveAccountUseCase,
    ChangePasswordUseCase,
    ChangeRolesUseCase,
    FindAccountPresentationsUseCase,
  ]);
}

export function provideAuthFacade() {
  return createServerProvider(AuthFacade, [SignInUseCase, SignUpUseCase]);
}

export function provideCitiesFacade() {
  return createServerProvider(CitiesFacade, [
    FindCitiesUseCase,
    FindCityByIDUseCase,
  ]);
}
