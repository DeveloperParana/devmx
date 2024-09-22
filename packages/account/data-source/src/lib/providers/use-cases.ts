import { createUseCaseProvider } from '@devmx/shared-data-source';
import { Env } from '@devmx/shared-api-interfaces/server';
import {
  JwtService,
  SignInUseCase,
  SignUpUseCase,
  CryptoService,
  AccountsService,
  FindAccountsUseCase,
  ChangePasswordUseCase,
  FindAccountByIDUseCase,
  RemoveAccountUseCase,
  UpdateAccountUseCase,
} from '@devmx/account-domain/server';

export function provideFindAccountsUseCase() {
  return createUseCaseProvider(FindAccountsUseCase, [AccountsService]);
}

export function provideFindAccountByIDUseCase() {
  return createUseCaseProvider(FindAccountByIDUseCase, [AccountsService]);
}

export function provideRemoveAccountUseCase() {
  return createUseCaseProvider(RemoveAccountUseCase, [AccountsService]);
}

export function provideUpdateAccountUseCase() {
  return createUseCaseProvider(UpdateAccountUseCase, [AccountsService]);
}

export function provideChangePasswordUseCase() {
  return createUseCaseProvider(ChangePasswordUseCase, [
    AccountsService,
    CryptoService,
  ]);
}

export function provideSignInUseCase() {
  return createUseCaseProvider(SignInUseCase, [
    AccountsService,
    CryptoService,
    JwtService,
    Env,
  ]);
}

export function provideSignUpUseCase() {
  return createUseCaseProvider(SignUpUseCase, [AccountsService, CryptoService]);
}
