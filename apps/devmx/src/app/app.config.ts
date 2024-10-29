import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideEnv, provideHttpClientImpl } from '@devmx/shared-data-access';
import { authInterceptor, loaderInterceptor } from './interceptors';
import { AuthFacade, provideAccount } from '@devmx/account-data-access';
import { providePresentation } from '@devmx/presentation-data-access';
import { provideCareer } from '@devmx/career-data-access';
import { provideEvent } from '@devmx/event-data-access';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/extra/br';
import { AuthErrorHandler } from './handlers';
import { appSections } from './app.sections';
import pt from '@angular/common/locales/pt';
import { appRoutes } from './app.routes';
import { env } from '../envs/env';
import {
  provideLayout,
  provideLayoutToolbar,
} from '@devmx/shared-ui-global/layout';
import {
  provideRouter,
  withHashLocation,
  withRouterConfig,
  withViewTransitions,
} from '@angular/router';
import {
  withFetch,
  HttpClient,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import {
  LOCALE_ID,
  ErrorHandler,
  ApplicationConfig,
  provideZoneChangeDetection,
} from '@angular/core';

registerLocaleData(pt, 'pt-BR', ptBr);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      appRoutes,
      withViewTransitions(),
      withHashLocation(),
      withRouterConfig({})
    ),
    provideAnimationsAsync(),
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
    {
      provide: ErrorHandler,
      useClass: AuthErrorHandler,
    },
    provideLayout(undefined, appSections),
    provideAccount(),
    provideLayoutToolbar(AuthFacade),
    provideHttpClient(
      withFetch(),
      withInterceptors([authInterceptor, loaderInterceptor])
    ),
    provideHttpClientImpl(HttpClient),
    provideEnv(env),
    ...provideCareer(),
    ...providePresentation(),
    ...provideEvent()
  ],
};
