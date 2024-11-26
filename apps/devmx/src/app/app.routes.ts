import { NotFoundContainer } from './containers';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'sobre',
    loadChildren: () =>
      import('@devmx/account-feature-about').then(
        (m) => m.accountFeatureAboutRoutes
      ),
  },
  {
    path: 'evento',
    loadChildren: () =>
      import('@devmx/event-feature-page').then((m) => m.eventFeaturePageRoutes),
  },
  {
    path: 'albuns',
    loadChildren: () =>
      import('@devmx/album-feature-shell').then(
        (m) => m.albumFeatureShellRoutes
      ),
  },
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
    path: 'academia',
    loadChildren: () =>
      import('@devmx/academy-feature-shell').then(
        (m) => m.academyFeatureShellRoutes
      ),
  },
  {
    path: 'aprenda',
    loadChildren: () =>
      import('@devmx/learn-feature-shell').then(
        (m) => m.learnFeatureShellRoutes
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'conta',
  },
  {
    path: '**',
    component: NotFoundContainer,
  },
];
