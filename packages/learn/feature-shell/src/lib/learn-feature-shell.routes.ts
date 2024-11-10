import { Route } from '@angular/router';
import { LearnFeatureShellComponent } from './learn-feature-shell.component';

export const learnFeatureShellRoutes: Route[] = [
  {
    path: '',
    data: {
      breadcrumb: 'Aprenda'
    },
    component: LearnFeatureShellComponent,
    children: [
      {
        path: 'administracao',
        loadChildren: () =>
          import('@devmx/learn-feature-admin').then(
            (m) => m.learnFeatureAdminRoutes
          ),
      },
    ],
  },
];
