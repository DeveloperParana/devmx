import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'presentations',
    loadChildren: () =>
      import('@devmx/presentation-feature-shell').then(
        (m) => m.presentationFeatureShellRoutes
      ),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('@devmx/account-feature-shell').then(
        (m) => m.accountFeatureShellRoutes
      ),
  },
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'presentations',
  },
];
