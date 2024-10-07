import {
  provideAuthFacade,
  provideAuthService,
  provideSignInUseCase,
  provideSignUpUseCase,
  provideLoadAuthUserUseCase,
  provideAccountService,
  provideFindAccountByIDUseCase,
  provideFindPresentationsByOwnerUseCase,
  provideUpdateAccountUseCase,
  provideRemoveAccountUseCase,
  provideAccountFacade,
  provideChangePasswordUseCase,
  provideUploadPhotoUseCase,
  provideFindAccountByUsernameUseCase,
  // provideCityService,
  provideFindAccountsUseCase,
  provideChangeRolesUseCase,
  provideFindEventsByOwnerUseCase,
  provideFindSpeakersUseCase,
  provideFindLeadersUseCase,
  provideRequestChallengeUseCase,
} from './providers';

export function provideAccount() {
  return [
    provideAuthService(),
    provideAccountService(),
    // provideCityService(),

    provideSignInUseCase(),
    provideSignUpUseCase(),
    provideLoadAuthUserUseCase(),

    provideFindAccountsUseCase(),
    provideFindAccountByIDUseCase(),
    provideFindAccountByUsernameUseCase(),
    provideFindPresentationsByOwnerUseCase(),
    provideFindEventsByOwnerUseCase(),
    provideFindSpeakersUseCase(),
    provideFindLeadersUseCase(),
    provideUpdateAccountUseCase(),
    provideRemoveAccountUseCase(),
    provideChangePasswordUseCase(),
    provideChangeRolesUseCase(),
    provideUploadPhotoUseCase(),
    provideRequestChallengeUseCase(),

    provideAuthFacade(),
    provideAccountFacade(),
  ];
}

export { provideAccountFacade };
