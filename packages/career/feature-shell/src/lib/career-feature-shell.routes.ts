import { JobOpeningsContainer, JobOpeningDetailsContainer } from './containers';
import { CareerFeatureShellComponent } from './career-feature-shell.component';
import { rolesGuard } from '@devmx/shared-ui-global/guards';
import { JobOpening } from '@devmx/shared-api-interfaces';
import { jobOpeningResolver } from './resolvers';
import { Route } from '@angular/router';

export const careerFeatureShellRoutes: Route[] = [
  {
    path: '',
    data: {
      breadcrumb: 'Carreiras',
    },
    canActivate: [rolesGuard('member')],
    component: CareerFeatureShellComponent,
    children: [
      {
        path: 'administracao',
        canActivate: [rolesGuard('recruiter', 'director', 'manager', 'staff')],
        loadChildren: () =>
          import('@devmx/career-feature-admin').then(
            (m) => m.careerFeatureAdminRoutes
          ),
      },
      {
        path: '',
        component: JobOpeningsContainer,
      },
      {
        path: ':id',
        data: {
          breadcrumb: (data: { jobOpening: JobOpening }) => {
            return data.jobOpening.title;
          },
        },
        resolve: { jobOpening: jobOpeningResolver },
        component: JobOpeningDetailsContainer,
        outlet: 'right',
      },
    ],
  },
];
