import { PresentationFeatureShellComponent } from './presentation-feature-shell.component';
import { providePresentation } from '@devmx/presentation-data-access';
import { rolesGuard } from '@devmx/shared-ui-global/guards';
import { Presentation } from '@devmx/shared-api-interfaces';
import { presentationResolver } from './resolvers';
import { Route } from '@angular/router';
import {
  PresentationDetailsContainer,
  PresentationsContainer,
} from './containers';

export const presentationFeatureShellRoutes: Route[] = [
  {
    path: '',
    providers: [...providePresentation()],
    data: {
      breadcrumb: 'Apresentações',
    },
    canActivate: [rolesGuard('member')],
    component: PresentationFeatureShellComponent,
    children: [
      {
        path: 'administracao',
        canActivate: [rolesGuard('speaker', 'director', 'manager', 'staff')],
        loadChildren: () =>
          import('@devmx/presentation-feature-admin').then(
            (m) => m.presentationFeatureAdminRoutes
          ),
      },
      {
        path: '',
        component: PresentationsContainer,
      },
      {
        path: ':id',
        data: {
          breadcrumb: (data: { presentation: Presentation }) => {
            return data.presentation.title;
          },
        },
        resolve: { presentation: presentationResolver },
        component: PresentationDetailsContainer,
        outlet: 'right',
      },
    ],
  },
];
