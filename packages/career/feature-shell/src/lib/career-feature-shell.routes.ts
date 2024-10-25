import { JobOpeningsContainer, JobOpeningDetailsContainer } from './containers';
import { CareerFeatureShellComponent } from './career-feature-shell.component';
import { roleGroupsGuard } from '@devmx/shared-ui-global/guards';
import { provideCareer } from '@devmx/career-data-access';
import { JobOpening } from '@devmx/shared-api-interfaces';
import { jobOpeningResolver } from './resolvers';
import { Route } from '@angular/router';

export const careerFeatureShellRoutes: Route[] = [
  {
    path: '',
    data: {
      breadcrumb: 'Carreiras',
    },
    providers: [...provideCareer()],
    component: CareerFeatureShellComponent,
    children: [
      {
        path: 'administracao',
        providers: [...provideCareer()],
        canActivate: [roleGroupsGuard('worthy', 'board', 'recruiter')],
        loadChildren: () =>
          import('@devmx/career-feature-admin').then(
            (m) => m.careerFeatureAdminRoutes
          ),
      },
      {
        path: '',
        data: {
          breadcrumb: 'Carreiras',
        },
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
