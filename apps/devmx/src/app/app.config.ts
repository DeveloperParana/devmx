import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  HttpClient,
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { authInterceptor } from './interceptors';
import { provideRouter } from '@angular/router';
import ptBr from '@angular/common/locales/extra/br';
import { AuthErrorHandler } from './handlers';
import pt from '@angular/common/locales/pt';
import { appRoutes } from './app.routes';
import { provideEnv } from './shared';
import { env } from '../envs/env';
import {
  LOCALE_ID,
  ErrorHandler,
  ApplicationConfig,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  provideAuthFacade,
  provideAuthService,
  provideHttpClientImpl,
  providePresentationFacade,
  providePresentationService,
} from './accounts';

registerLocaleData(pt, 'pt-BR', ptBr);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideAnimationsAsync(),
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
    {
      provide: ErrorHandler,
      useClass: AuthErrorHandler,
    },
    provideHttpClient(withFetch(), withInterceptors([authInterceptor])),
    provideHttpClientImpl(HttpClient),
    provideEnv(env),
    provideAuthService(),
    provideAuthFacade(),
    providePresentationService(),
    providePresentationFacade(),
  ],
};
