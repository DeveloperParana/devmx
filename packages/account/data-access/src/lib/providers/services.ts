import { createServiceProvider, HttpClient } from '@devmx/shared-data-access';
import { Env } from '@devmx/shared-api-interfaces/client';
import {
  AboutService,
  AccountService,
  AuthService,
} from '@devmx/account-domain/client';
import {
  AboutServiceImpl,
  AccountServiceImpl,
  AuthServiceImpl,
} from '../services';

export function provideAuthService() {
  return createServiceProvider(AuthService, AuthServiceImpl, [HttpClient, Env]);
}

export function provideAboutService() {
  return createServiceProvider(AboutService, AboutServiceImpl, [
    HttpClient,
    Env,
  ]);
}

export function provideAccountService() {
  return createServiceProvider(AccountService, AccountServiceImpl, [
    HttpClient,
    Env,
  ]);
}

export function provideServices() {
  return [provideAuthService(), provideAboutService(), provideAccountService()];
}
