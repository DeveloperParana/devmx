import { CareerFeatureShellComponent } from './career-feature-shell.component';
import { careerFeatureShellSidenav } from './career-feature-shell.sidenav';
import { AuthFacade, provideAccount } from '@devmx/account-data-access';
import { CareersContainer, JobDetailsContainer } from './containers';
import { provideCareer } from '@devmx/career-data-access';
import { JobOut } from '@devmx/shared-api-interfaces';
import { JobFilterComponent } from './components';
import { jobResolver } from './resolvers';
import { Route } from '@angular/router';
import {
  provideLayout,
  provideLayoutSidenav,
  provideLayoutToolbar,
} from '@devmx/shared-ui-global/layout';

export const careerFeatureShellRoutes: Route[] = [
  {
    path: '',
    data: {
      breadcrumb: 'Carreiras',
    },
    providers: [
      ...provideAccount(),
      ...provideCareer(),
      ...provideLayout(JobFilterComponent),
      provideLayoutToolbar(AuthFacade),
      provideLayoutSidenav(careerFeatureShellSidenav),
    ],
    component: CareerFeatureShellComponent,
    children: [
      {
        path: '',
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
