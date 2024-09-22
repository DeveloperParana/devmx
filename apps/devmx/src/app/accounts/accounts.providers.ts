import {
  AuthService,
  AuthServiceImpl,
  PresentationService,
  PresentationServiceImpl,
} from './services';
import { HttpClient } from './ports/http-client';
import { AuthFacade, PresentationFacade } from './facades';
import { Env } from '../shared';

export function provideHttpClientImpl<T>(HttpClientImpl: T) {
  return {
    provide: HttpClient,
    useClass: HttpClientImpl,
  };
}

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

export function provideAuthFacade() {
  return {
    provide: AuthFacade,
    useFactory(service: AuthService) {
      return new AuthFacade(service);
    },
    deps: [AuthService],
  };
}

export function providePresentationFacade() {
  return {
    provide: PresentationFacade,
    useFactory(service: PresentationService) {
      return new PresentationFacade(service);
    },
    deps: [PresentationService],
  };
}
