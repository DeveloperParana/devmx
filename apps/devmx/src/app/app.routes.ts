import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'eventos',
    loadChildren: () =>
      import('@devmx/event-feature-shell').then(
        (m) => m.eventFeatureShellRoutes
      ),
  },
  {
    path: 'apresentacoes',
    loadChildren: () =>
      import('@devmx/presentation-feature-shell').then(
        (m) => m.presentationFeatureShellRoutes
      ),
  },
  {
    path: 'conta',
    loadChildren: () =>
      import('@devmx/account-feature-shell').then(
        (m) => m.accountFeatureShellRoutes
      ),
  },
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'conta',
  },
];
