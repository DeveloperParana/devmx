import { CareerFeatureAdminComponent } from './career-feature-admin.component';
import { careerFeatureAdminProviders } from './career-feature-admin.providers';
import { JobOpeningContainer, MyJobOpeningsContainer } from './containers';
import { JobOpening } from '@devmx/shared-api-interfaces';
import { jobOpeningResolver } from './resolvers';
import { Route } from '@angular/router';

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
        path: 'minhas-ofertas/:id',
        data: {
          breadcrumb: (data: { jobOpening: JobOpening }) => {
            return data.jobOpening.title;
          },
        },
        resolve: { jobOpening: jobOpeningResolver },
        component: JobOpeningContainer,
      },
      {
        path: 'minhas-ofertas',
        data: {
          breadcrumb: 'Minhas vagas',
        },
        component: MyJobOpeningsContainer,
      },
    ],
  },
];
