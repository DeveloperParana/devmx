import { PresentationsService } from '@devmx/presentation-domain/server';
import { createUseCaseProvider } from '@devmx/shared-data-source';
import { EventsService } from '@devmx/event-domain/server';
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
  FindPresentationsByOwnerUseCase,
  FindAccountByUsernameUseCase,
  ChangeRolesUseCase,
  FindEventsByOwnerUseCase,
  FindAccountsByRoleUseCase,
} from '@devmx/account-domain/server';

export function provideFindAccountsUseCase() {
  return createUseCaseProvider(FindAccountsUseCase, [AccountsService]);
}

export function provideFindAccountByIDUseCase() {
  return createUseCaseProvider(FindAccountByIDUseCase, [AccountsService]);
}

export function provideFindAccountByUsernameUseCase() {
  return createUseCaseProvider(FindAccountByUsernameUseCase, [AccountsService]);
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

export function provideChangeRolesUseCase() {
  return createUseCaseProvider(ChangeRolesUseCase, [AccountsService]);
}

export function provideFindPresentationsByOwnerUseCase() {
  return createUseCaseProvider(FindPresentationsByOwnerUseCase, [
    PresentationsService,
  ]);
}

export function provideFindEventsByOwnerUseCase() {
  return createUseCaseProvider(FindEventsByOwnerUseCase, [EventsService]);
}

export function provideFindAccountsByRoleUseCase() {
  return createUseCaseProvider(FindAccountsByRoleUseCase, [AccountsService]);
}
