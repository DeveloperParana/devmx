import { providePresentationService } from '@devmx/presentation-data-access';
import {
  provideAuthFacade,
  provideAuthService,
  provideAccountService,
  provideAccountFacade,
  provideUseCases,
  provideSignInUseCase,
  provideSignUpUseCase,
  provideAboutService,
  provideFindAboutAccountUseCase,
  provideAboutFacade,
} from './providers';

export function provideAccount() {
  return [
    providePresentationService(),

    provideAuthService(),
    provideAccountService(),

    ...provideUseCases(),

    provideAuthFacade(),
    provideAccountFacade(),
  ];
}

export function provideAuth() {
  return [
    provideAuthService(),

    provideSignInUseCase(),
    provideSignUpUseCase(),

    provideAuthFacade(),
  ];
}

export function provideAbout() {
  return [
    provideAboutService(),

    provideFindAboutAccountUseCase(),

    provideAboutFacade(),
  ];
}

export { provideAccountFacade };
