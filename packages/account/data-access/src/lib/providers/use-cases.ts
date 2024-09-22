import { createUseCaseProvider } from '@devmx/shared-data-access';
import {
  AuthService,
  LoadAuthUserUseCase,
  SignInUseCase,
  SignUpUseCase,
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
