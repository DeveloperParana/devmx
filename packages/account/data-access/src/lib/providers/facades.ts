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
      findAccountPresentations: FindAccountPresentationsUseCase,
      updateAccount: UpdateAccountUseCase,
      removeAccount: RemoveAccountUseCase,
      changePassword: ChangePasswordUseCase,
    ) {
      return new AccountFacade(
        findAccountByID,
        findAccountPresentations,
        updateAccount,
        removeAccount,
        changePassword,
      );
    },
    deps: [
      FindAccountByIDUseCase,
      FindAccountPresentationsUseCase,
      UpdateAccountUseCase,
      RemoveAccountUseCase,
      ChangePasswordUseCase
    ],
  };
}
