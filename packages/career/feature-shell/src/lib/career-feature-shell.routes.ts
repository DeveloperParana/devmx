import { CareerFeatureShellComponent } from './career-feature-shell.component';
import { CareersContainer, JobDetailsContainer } from './containers';
import { roleGroupsGuard } from '@devmx/shared-ui-global/guards';
import { provideCareer } from '@devmx/career-data-access';
import { JobOut } from '@devmx/shared-api-interfaces';
import { jobResolver } from './resolvers';
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
        component: CareersContainer,
      },
      {
        path: ':id',
        data: {
          breadcrumb: (data: { job: JobOut }) => {
            return data.job.title;
          },
        },
        resolve: { job: jobResolver },
        component: JobDetailsContainer,
        outlet: 'right',
      },
    ],
  },
];
