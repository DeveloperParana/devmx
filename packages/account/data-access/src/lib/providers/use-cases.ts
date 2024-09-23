import { createUseCaseProvider } from '@devmx/shared-data-access';
import {
  AuthService,
  SignInUseCase,
  SignUpUseCase,
  AccountService,
  LoadAuthUserUseCase,
  RemoveAccountUseCase,
  UpdateAccountUseCase,
  FindAccountPresentationsUseCase,
  FindAccountByIDUseCase,
  ChangePasswordUseCase,
  UploadPhotoUseCase,
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

export function provideFindAccountByIDUseCase() {
  return createUseCaseProvider(FindAccountByIDUseCase, [AccountService]);
}

export function provideUpdateAccountUseCase() {
  return createUseCaseProvider(UpdateAccountUseCase, [AccountService]);
}

export function provideRemoveAccountUseCase() {
  return createUseCaseProvider(RemoveAccountUseCase, [AccountService]);
}

export function provideFindAccountPresentationsUseCase() {
  return createUseCaseProvider(FindAccountPresentationsUseCase, [
    AccountService,
  ]);
}

export function provideChangePasswordUseCase() {
  return createUseCaseProvider(ChangePasswordUseCase, [AccountService]);
}

export function provideUploadPhotoUseCase() {
  return createUseCaseProvider(UploadPhotoUseCase, [AccountService]);
}
