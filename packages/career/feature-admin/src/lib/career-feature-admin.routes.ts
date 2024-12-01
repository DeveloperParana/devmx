import { CareerFeatureAdminComponent } from './career-feature-admin.component';
import { careerFeatureAdminProviders } from './career-feature-admin.providers';
import { rolesGuard } from '@devmx/shared-ui-global/guards';
import { JobOpening } from '@devmx/shared-api-interfaces';
import { jobOpeningResolver } from './resolvers';
import { Route } from '@angular/router';
import {
  JobOpeningContainer,
  ManageJobOpeningsContainer,
  MyJobOpeningsContainer,
} from './containers';

export const careerFeatureAdminRoutes: Route[] = [
  {
    path: '',
    data: {
      breadcrumb: 'Administração',
    },
    providers: careerFeatureAdminProviders,
    component: CareerFeatureAdminComponent,
    children: [
      {
        path: 'minhas-ofertas/nova',
        data: {
          breadcrumb: 'Nova',
        },
        title: 'Nova vaga',
        component: JobOpeningContainer,
      },
      {
        path: 'minhas-ofertas/:id',
        data: {
          breadcrumb: (data: { jobOpening: JobOpening }) => {
            return data.jobOpening.title;
          },
        },
        title: 'Minha vaga',
        resolve: { jobOpening: jobOpeningResolver },
        component: JobOpeningContainer,
      },
      {
        path: 'minhas-ofertas',
        data: {
          breadcrumb: 'Minhas vagas',
        },
        title: 'Minhas vagas',
        component: MyJobOpeningsContainer,
      },
      {
        path: 'gerenciar-ofertas',
        data: {
          breadcrumb: 'Gerenciar ofertas',
        },
        title: 'Gerenciar vagas',
        canActivate: [rolesGuard('director', 'manager', 'staff')],
        component: ManageJobOpeningsContainer,
      },
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'minhas-ofertas',
      },
    ],
  },
];
