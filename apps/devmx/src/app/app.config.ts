import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideEnv, provideHttpClientImpl } from '@devmx/shared-data-access';
// import { provideCrumbs } from '@devmx/shared-ui-global/crumbs';
import { provideLayout } from '@devmx/shared-ui-global/layout';
import { registerLocaleData } from '@angular/common';
import { authInterceptor } from './interceptors';
import ptBr from '@angular/common/locales/extra/br';
import { AuthErrorHandler } from './handlers';
import pt from '@angular/common/locales/pt';
import { appRoutes } from './app.routes';
import { env } from '../envs/env';
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
    provideHttpClient(withFetch(), withInterceptors([authInterceptor])),
    provideHttpClientImpl(HttpClient),
    provideEnv(env),
    provideLayout(),
  ],
};
