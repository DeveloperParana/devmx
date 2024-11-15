import { LearnFeatureShellComponent } from './learn-feature-shell.component';
import { rolesGuard } from '@devmx/shared-ui-global/guards';
import { Route } from '@angular/router';

export const learnFeatureShellRoutes: Route[] = [
  {
    path: '',
    data: {
      breadcrumb: 'Aprenda',
    },
    canActivate: [rolesGuard('member')],
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
