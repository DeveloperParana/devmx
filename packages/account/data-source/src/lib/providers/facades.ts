import { createServerProvider } from '@devmx/shared-data-source';
import { AccountsFacade, AuthFacade } from '../facades';
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
