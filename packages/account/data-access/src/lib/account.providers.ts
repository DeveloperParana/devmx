import {
  provideAuthFacade,
  provideAuthService,
  provideAccountService,
  provideAccountFacade,
  provideUseCases,
} from './providers';

export function provideAccount() {
  return [
    provideAuthService(),
    provideAccountService(),

    ...provideUseCases(),

    provideAuthFacade(),
    provideAccountFacade(),
  ];
}

export { provideAccountFacade };
