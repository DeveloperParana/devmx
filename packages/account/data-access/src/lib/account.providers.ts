import {
  provideAuthFacade,
  provideAuthService,
  provideSignInUseCase,
  provideSignUpUseCase,
  provideLoadAuthUserUseCase,
  provideAccountService,
  provideFindAccountByIDUseCase,
  provideFindAccountPresentationsUseCase,
  provideUpdateAccountUseCase,
  provideRemoveAccountUseCase,
  provideAccountFacade,
  provideChangePasswordUseCase,
  provideUploadPhotoUseCase,
} from './providers';

export function provideAccount() {
  return [
    provideAuthService(),
    provideAccountService(),

    provideSignInUseCase(),
    provideSignUpUseCase(),
    provideLoadAuthUserUseCase(),

    provideFindAccountByIDUseCase(),
    provideFindAccountPresentationsUseCase(),
    provideUpdateAccountUseCase(),
    provideRemoveAccountUseCase(),
    provideChangePasswordUseCase(),
    provideUploadPhotoUseCase(),

    provideAuthFacade(),
    provideAccountFacade(),
  ];
}
