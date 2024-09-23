import { AccountService, AuthService } from '@devmx/account-domain/client';
import { Env } from '@devmx/shared-api-interfaces/client';
import { HttpClient } from '@devmx/shared-data-access';
import { AccountServiceImpl, AuthServiceImpl } from '../services';

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
