import { PresentationFeatureAdminComponent } from './presentation-feature-admin.component';
import { presentationFeatureAdminProviders } from './presentation-feature-admin.providers';
import { MyPresentationsContainer, PresentationContainer } from './containers';
import { Presentation } from '@devmx/shared-api-interfaces';
import { presentationResolver } from './resolvers';
import { Route } from '@angular/router';

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
        component: PresentationContainer,
      },
      {
        path: 'minhas-apresentacoes/:id',
        data: {
          breadcrumb: (data: { presentation: Presentation }) => {
            return data.presentation.title;
          },
        },
        resolve: { presentation: presentationResolver },
        component: PresentationContainer,
      },
      {
        path: 'minhas-apresentacoes',
        data: {
          breadcrumb: 'Minhas apresentações',
        },
        component: MyPresentationsContainer,
      },
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'minhas-apresentacoes',
      },
    ],
  },
];
