import { Env } from '@devmx/shared-api-interfaces/client';
import { HttpClient } from '@devmx/shared-data-access';
import {
  AccountService,
  AuthService,
  CityService,
} from '@devmx/account-domain/client';
import {
  AccountServiceImpl,
  AuthServiceImpl,
  CityServiceImpl,
} from '../services';

export function provideAuthService() {
  return {
    provide: AuthService,
    useFactory(http: HttpClient, env: Env) {
      return new AuthServiceImpl(http, env);
    },
    deps: [HttpClient, Env],
  };
}

export function provideAccountService() {
  return {
    provide: AccountService,
    useFactory(http: HttpClient, env: Env) {
      return new AccountServiceImpl(http, env);
    },
    deps: [HttpClient, Env],
  };
}

export function provideCityService() {
  return {
    provide: CityService,
    useFactory(http: HttpClient, env: Env) {
      return new CityServiceImpl(http, env);
    },
    deps: [HttpClient, Env],
  };
}
