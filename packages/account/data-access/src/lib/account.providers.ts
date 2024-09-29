import { AccountNavFacade } from './facades';
import { NavItem } from './interfaces';
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
  provideFindAccountByUsernameUseCase,
  provideCityService,
  provideFindAccountsUseCase,
  provideChangeRolesUseCase,
} from './providers';

export function provideAccount() {
  return [
    provideAuthService(),
    provideAccountService(),
    provideCityService(),

    provideSignInUseCase(),
    provideSignUpUseCase(),
    provideLoadAuthUserUseCase(),

    provideFindAccountsUseCase(),
    provideFindAccountByIDUseCase(),
    provideFindAccountByUsernameUseCase(),
    provideFindAccountPresentationsUseCase(),
    provideUpdateAccountUseCase(),
    provideRemoveAccountUseCase(),
    provideChangePasswordUseCase(),
    provideChangeRolesUseCase(),
    provideUploadPhotoUseCase(),

    provideAuthFacade(),
    provideAccountFacade(),
  ];
}

export function provideAccountNavFacade(items: NavItem[] = []) {
  return {
    provide: AccountNavFacade,
    useFactory() {
      return new AccountNavFacade(items);
    },
  };
}
