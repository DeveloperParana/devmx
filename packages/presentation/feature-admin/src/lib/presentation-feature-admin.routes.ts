import { PresentationFeatureAdminComponent } from './presentation-feature-admin.component';
import { presentationFeatureAdminProviders } from './presentation-feature-admin.providers';
import { Presentation } from '@devmx/shared-api-interfaces';
import { presentationResolver } from './resolvers';
import { Route } from '@angular/router';
import {
  ManagePresentationsContainer,
  MyPresentationsContainer,
  PresentationContainer,
} from './containers';
import { rolesGuard } from '@devmx/shared-ui-global/guards';

export const presentationFeatureAdminRoutes: Route[] = [
  {
    path: '',
    data: {
      breadcrumb: 'Administração',
    },
    providers: presentationFeatureAdminProviders,
    component: PresentationFeatureAdminComponent,
    children: [
      {
        path: 'minhas-apresentacoes/nova',
        data: {
          breadcrumb: 'Nova',
        },
        title: 'Nova apresentação',
        component: PresentationContainer,
      },
      {
        path: 'minhas-apresentacoes/:id',
        data: {
          breadcrumb: (data: { presentation: Presentation }) => {
            return data.presentation.title;
          },
        },
        title: 'Minha apresentação',
        resolve: { presentation: presentationResolver },
        component: PresentationContainer,
      },
      {
        path: 'minhas-apresentacoes',
        data: {
          breadcrumb: 'Minhas apresentações',
        },
        title: 'Minhas apresentações',
        component: MyPresentationsContainer,
      },
      {
        path: 'gerenciar-apresentacoes',
        data: {
          breadcrumb: 'Gerenciar apresentações',
        },
        title: 'Gerenciar apresentações',
        canActivate: [rolesGuard('director', 'manager', 'staff')],
        component: ManagePresentationsContainer,
      },
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'minhas-apresentacoes',
      },
    ],
  },
];
