import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'carreiras',
    loadChildren: () =>
      import('@devmx/career-feature-shell').then(
        (m) => m.careerFeatureShellRoutes
      ),
  },
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
    path: '',
    loadChildren: () =>
      import('@devmx/account-feature-shell').then(
        (m) => m.accountFeatureShellRoutes
      ),
  }
];
