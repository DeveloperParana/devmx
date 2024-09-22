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
} from '@devmx/account-domain/server';

export function provideAccountsFacade() {
  return createServerProvider(AccountsFacade, [
    FindAccountsUseCase,
    FindAccountByIDUseCase,
    UpdateAccountUseCase,
    RemoveAccountUseCase,
    ChangePasswordUseCase,
  ]);
}

export function provideAuthFacade() {
  return createServerProvider(AuthFacade, [
    SignInUseCase,
    SignUpUseCase
  ]);
}
