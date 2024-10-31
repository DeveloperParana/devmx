import { AboutFacade, AccountFacade, AuthFacade } from '../facades';
import { createClientProvider } from '@devmx/shared-data-access';
import {
  SignInUseCase,
  SignUpUseCase,
  LoadAuthUserUseCase,
  FindAccountByIDUseCase,
  UpdateAccountUseCase,
  RemoveAccountUseCase,
  ChangePasswordUseCase,
  UploadPhotoUseCase,
  FindAccountByUsernameUseCase,
  FindAccountsUseCase,
  ChangeRolesUseCase,
  FindEventsByOwnerUseCase,
  FindSpeakersUseCase,
  FindLeadersUseCase,
  RequestChallengeUseCase,
  FindJobsByOwnerUseCase,
  FindAboutAccountUseCase,
  FindAccountsByRoleUseCase,
} from '@devmx/account-domain/client';

export function provideAuthFacade() {
  return createClientProvider(AuthFacade, [
    SignInUseCase,
    SignUpUseCase,
    LoadAuthUserUseCase,
    RequestChallengeUseCase,
  ]);
}

export function provideAboutFacade() {
  return createClientProvider(AboutFacade, [FindAboutAccountUseCase]);
}

export function provideAccountFacade() {
  return createClientProvider(AccountFacade, [
    FindAccountsUseCase,
    FindAccountByIDUseCase,
    FindAccountByUsernameUseCase,
    FindJobsByOwnerUseCase,
    FindEventsByOwnerUseCase,
    UpdateAccountUseCase,
    RemoveAccountUseCase,
    ChangePasswordUseCase,
    ChangeRolesUseCase,
    UploadPhotoUseCase,
    FindSpeakersUseCase,
    FindLeadersUseCase,
    FindAccountsByRoleUseCase
  ]);
}

export function provideFacades() {
  return [provideAuthFacade(), provideAboutFacade(), provideAccountFacade()];
}
