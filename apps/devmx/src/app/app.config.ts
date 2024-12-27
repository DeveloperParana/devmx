import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { provideEnv, provideHttpClientImpl } from '@devmx/shared-data-access';
import { providePresentation } from '@devmx/presentation-data-access';
import { authInterceptor, loaderInterceptor } from './interceptors';
import { provideServiceWorker } from '@angular/service-worker';
import { provideAcademy } from '@devmx/academy-data-access';
import { provideCareer } from '@devmx/career-data-access';
import { provideAlbum } from '@devmx/album-data-access';
import { provideEvent } from '@devmx/event-data-access';
import { provideLearn } from '@devmx/learn-data-access';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/extra/br';
import { AuthErrorHandler } from './handlers';
import { appSections } from './app.sections';
import pt from '@angular/common/locales/pt';
import { appRoutes } from './app.routes';
import { env } from '../envs/env';
import {
  provideAccount,
  AuthenticationFacade,
} from '@devmx/account-data-access';
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
  HttpBackend,
  HttpClient,
  HttpXhrBackend,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import {
  LOCALE_ID,
  isDevMode,
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
      withRouterConfig({
        onSameUrlNavigation: 'ignore',
        urlUpdateStrategy: 'deferred',
      })
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
    provideLayout(appSections),
    provideHttpClient(withInterceptors([authInterceptor, loaderInterceptor])),
    {
      provide: HttpBackend,
      useExisting: HttpXhrBackend,
    },
    provideHttpClientImpl(HttpClient),
    ...provideAccount(),
    provideLayoutToolbar(AuthenticationFacade),
    provideEnv(env),
    ...provideCareer(),
    ...providePresentation(),
    ...provideEvent(),
    ...provideAlbum(),
    ...provideAcademy(),
    ...provideLearn(),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
};
