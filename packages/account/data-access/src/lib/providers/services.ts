import { AuthService, PresentationService } from '@devmx/account-domain/client';
import { AuthServiceImpl, PresentationServiceImpl } from '../services';
import { Env, HttpClient } from '@devmx/shared-data-access';


export function provideAuthService() {
  return {
    provide: AuthService,
    useFactory(http: HttpClient, env: Env) {
      return new AuthServiceImpl(http, env);
    },
    deps: [HttpClient, Env],
  };
}

export function providePresentationService() {
  return {
    provide: PresentationService,
    useFactory(http: HttpClient, env: Env) {
      return new PresentationServiceImpl(http, env);
    },
    deps: [HttpClient, Env],
  };
}
