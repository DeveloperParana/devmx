import { createServerProvider } from '@devmx/shared-data-source';
import { AboutFacade, AccountsFacade, AuthFacade } from '../facades';
import {
  SignInUseCase,
  SignUpUseCase,
  FindAccountsUseCase,
  RemoveAccountUseCase,
  UpdateAccountUseCase,
  ChangePasswordUseCase,
  FindAccountByIDUseCase,
  FindPresentationsByOwnerUseCase,
  FindAccountByUsernameUseCase,
  ChangeRolesUseCase,
  FindEventsByOwnerUseCase,
  FindAccountsByRoleUseCase,
  FindJobsByOwnerUseCase,
  FindAboutAccountUseCase,
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
    FindPresentationsByOwnerUseCase,
    FindJobsByOwnerUseCase,
    FindEventsByOwnerUseCase,
    FindAccountsByRoleUseCase,
  ]);
}

export function provideAuthFacade() {
  return createServerProvider(AuthFacade, [SignInUseCase, SignUpUseCase]);
}

export function provideAboutFacade() {
  return createServerProvider(AboutFacade, [FindAboutAccountUseCase]);
}

export function provideFacades() {
  return [provideAccountsFacade(), provideAuthFacade(), provideAboutFacade()];
}
