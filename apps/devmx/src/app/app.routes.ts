import { Route } from '@angular/router';
import { NotFoundContainer } from './containers';

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
    path: 'conta',
    loadChildren: () =>
      import('@devmx/account-feature-shell').then(
        (m) => m.accountFeatureShellRoutes
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'eventos',
  },
  {
    path: '**',
    component: NotFoundContainer,
  },
];
