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
      findPresentationsByOwner: FindPresentationsByOwnerUseCase,
      findEventsByOwner: FindEventsByOwnerUseCase,
      updateAccount: UpdateAccountUseCase,
      removeAccount: RemoveAccountUseCase,
      changePassword: ChangePasswordUseCase,
      changeRoles: ChangeRolesUseCase,
      uploadPhoto: UploadPhotoUseCase,
      findSpeakers: FindSpeakersUseCase,
      findLeaders: FindLeadersUseCase
    ) {
      return new AccountFacade(
        findAccounts,
        findAccountByID,
        findAccountUsernameID,
        findPresentationsByOwner,
        findEventsByOwner,
        updateAccount,
        removeAccount,
        changePassword,
        changeRoles,
        uploadPhoto,
        findSpeakers,
        findLeaders
      );
    },
    deps: [
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
    ],
  };
}
