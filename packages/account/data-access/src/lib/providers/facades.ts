import { AccountFacade, AuthFacade } from '../facades';
import {
  SignInUseCase,
  SignUpUseCase,
  LoadAuthUserUseCase,
  FindAccountByIDUseCase,
  FindAccountPresentationsUseCase,
  UpdateAccountUseCase,
  RemoveAccountUseCase,
  ChangePasswordUseCase,
  UploadPhotoUseCase,
  FindAccountByUsernameUseCase,
} from '@devmx/account-domain/client';

export function provideAuthFacade() {
  return {
    provide: AuthFacade,
    useFactory(
      signIn: SignInUseCase,
      signUp: SignUpUseCase,
      loadAuthUser: LoadAuthUserUseCase
    ) {
      return new AuthFacade(signIn, signUp, loadAuthUser);
    },
    deps: [SignInUseCase, SignUpUseCase, LoadAuthUserUseCase],
  };
}

export function provideAccountFacade() {
  return {
    provide: AccountFacade,
    useFactory(
      findAccountByID: FindAccountByIDUseCase,
      findAccountUsernameID: FindAccountByUsernameUseCase,
      findAccountPresentations: FindAccountPresentationsUseCase,
      updateAccount: UpdateAccountUseCase,
      removeAccount: RemoveAccountUseCase,
      changePassword: ChangePasswordUseCase,
      uploadPhoto: UploadPhotoUseCase
    ) {
      return new AccountFacade(
        findAccountByID,
        findAccountUsernameID,
        findAccountPresentations,
        updateAccount,
        removeAccount,
        changePassword,
        uploadPhoto
      );
    },
    deps: [
      FindAccountByIDUseCase,
      FindAccountByUsernameUseCase,
      FindAccountPresentationsUseCase,
      UpdateAccountUseCase,
      RemoveAccountUseCase,
      ChangePasswordUseCase,
      UploadPhotoUseCase,
    ],
  };
}
