import { createClientProvider } from '@devmx/shared-data-access';
import { AccountFacade, AuthFacade } from '../facades';
import {
  SignInUseCase,
  SignUpUseCase,
  LoadAuthUserUseCase,
  FindAccountByIDUseCase,
  FindPresentationsByOwnerUseCase,
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
} from '@devmx/account-domain/client';

export function provideAuthFacade() {
  return createClientProvider(AuthFacade, [
    SignInUseCase,
    SignUpUseCase,
    LoadAuthUserUseCase,
    RequestChallengeUseCase,
  ]);
}

export function provideAccountFacade() {
  return createClientProvider(AccountFacade, [
    FindAccountsUseCase,
    FindAccountByIDUseCase,
    FindAccountByUsernameUseCase,
    FindPresentationsByOwnerUseCase,
    FindEventsByOwnerUseCase,
    UpdateAccountUseCase,
    RemoveAccountUseCase,
    ChangePasswordUseCase,
    ChangeRolesUseCase,
    UploadPhotoUseCase,
    FindSpeakersUseCase,
    FindLeadersUseCase,
  ]);
}
