import {
  provideAuthFacade,
  provideAuthService,
  provideSignInUseCase,
  provideSignUpUseCase,
  provideLoadAuthUserUseCase,
} from './providers';

export function provideAccount() {
  return [
    provideAuthService(),

    provideSignInUseCase(),
    provideSignUpUseCase(),
    provideLoadAuthUserUseCase(),

    provideAuthFacade(),
  ];
}
