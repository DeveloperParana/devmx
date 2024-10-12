import { provideFindPresentationsUseCase } from '@devmx/presentation-data-access';
import { createUseCaseProvider } from '@devmx/shared-data-access';
import {
  AuthService,
  SignInUseCase,
  SignUpUseCase,
  AccountService,
  LoadAuthUserUseCase,
  RemoveAccountUseCase,
  UpdateAccountUseCase,
  FindAccountByIDUseCase,
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
  AboutService,
} from '@devmx/account-domain/client';


export function provideSignInUseCase() {
  return createUseCaseProvider(SignInUseCase, [AuthService]);
}

export function provideSignUpUseCase() {
  return createUseCaseProvider(SignUpUseCase, [AuthService]);
}

export function provideLoadAuthUserUseCase() {
  return createUseCaseProvider(LoadAuthUserUseCase, [AuthService]);
}

export function provideFindAccountsUseCase() {
  return createUseCaseProvider(FindAccountsUseCase, [AccountService]);
}

export function provideFindAccountByIDUseCase() {
  return createUseCaseProvider(FindAccountByIDUseCase, [AccountService]);
}

export function provideFindAccountByUsernameUseCase() {
  return createUseCaseProvider(FindAccountByUsernameUseCase, [AccountService]);
}

export function provideUpdateAccountUseCase() {
  return createUseCaseProvider(UpdateAccountUseCase, [AccountService]);
}

export function provideRemoveAccountUseCase() {
  return createUseCaseProvider(RemoveAccountUseCase, [AccountService]);
}

export function provideFindJobsByOwnerUseCase() {
  return createUseCaseProvider(FindJobsByOwnerUseCase, [AccountService]);
}

export function provideFindEventsByOwnerUseCase() {
  return createUseCaseProvider(FindEventsByOwnerUseCase, [AccountService]);
}

export function provideChangePasswordUseCase() {
  return createUseCaseProvider(ChangePasswordUseCase, [AccountService]);
}

export function provideChangeRolesUseCase() {
  return createUseCaseProvider(ChangeRolesUseCase, [AccountService]);
}

export function provideUploadPhotoUseCase() {
  return createUseCaseProvider(UploadPhotoUseCase, [AccountService]);
}

export function provideFindSpeakersUseCase() {
  return createUseCaseProvider(FindSpeakersUseCase, [AccountService]);
}

export function provideFindLeadersUseCase() {
  return createUseCaseProvider(FindLeadersUseCase, [AccountService]);
}

export function provideRequestChallengeUseCase() {
  return createUseCaseProvider(RequestChallengeUseCase, [AuthService]);
}

export function provideFindAboutAccountUseCase() {
  return createUseCaseProvider(FindAboutAccountUseCase, [AboutService]);
}

export function provideUseCases() {
  return [
    provideSignInUseCase(),
    provideSignUpUseCase(),
    provideLoadAuthUserUseCase(),
    provideFindAccountsUseCase(),
    provideFindAccountByIDUseCase(),
    provideFindAccountByUsernameUseCase(),
    provideUpdateAccountUseCase(),
    provideRemoveAccountUseCase(),
    provideFindPresentationsUseCase(),
    provideFindJobsByOwnerUseCase(),
    provideFindEventsByOwnerUseCase(),
    provideChangePasswordUseCase(),
    provideChangeRolesUseCase(),
    provideUploadPhotoUseCase(),
    provideFindSpeakersUseCase(),
    provideFindLeadersUseCase(),
    provideRequestChallengeUseCase(),
    provideFindAboutAccountUseCase()
  ];
}
