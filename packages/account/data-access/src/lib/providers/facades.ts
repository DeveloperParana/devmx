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
  FindAccountsUseCase,
  ChangeRolesUseCase,
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
      findAccounts: FindAccountsUseCase,
      findAccountByID: FindAccountByIDUseCase,
      findAccountUsernameID: FindAccountByUsernameUseCase,
      findAccountPresentations: FindAccountPresentationsUseCase,
      updateAccount: UpdateAccountUseCase,
      removeAccount: RemoveAccountUseCase,
      changePassword: ChangePasswordUseCase,
      changeRoles: ChangeRolesUseCase,
      uploadPhoto: UploadPhotoUseCase
    ) {
      return new AccountFacade(
        findAccounts,
        findAccountByID,
        findAccountUsernameID,
        findAccountPresentations,
        updateAccount,
        removeAccount,
        changePassword,
        changeRoles,
        uploadPhoto
      );
    },
    deps: [
      FindAccountsUseCase,
      FindAccountByIDUseCase,
      FindAccountByUsernameUseCase,
      FindAccountPresentationsUseCase,
      UpdateAccountUseCase,
      RemoveAccountUseCase,
      ChangePasswordUseCase,
      ChangeRolesUseCase,
      UploadPhotoUseCase,
    ],
  };
}
