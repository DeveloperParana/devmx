import { Route } from '@angular/router';

export const appRoutes: Route[] = [
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
    redirectTo: 'account'
  },
];
