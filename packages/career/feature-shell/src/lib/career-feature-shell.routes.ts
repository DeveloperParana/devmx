import { CareerFeatureShellComponent } from './career-feature-shell.component';
import { careerFeatureShellSidenav } from './career-feature-shell.sidenav';
import { CareerDetailsContainer, CareersContainer } from './containers';
import { AuthFacade, provideAccount } from '@devmx/account-data-access';
import { provideCareer } from '@devmx/career-data-access';
import { JobOut } from '@devmx/shared-api-interfaces';
import { CareersFilterOutlet } from './outlets';
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
      ...provideLayout(CareersFilterOutlet),
      provideLayoutToolbar(AuthFacade),
      provideLayoutSidenav(careerFeatureShellSidenav),
    ],
    component: CareerFeatureShellComponent,
    children: [
      // {
      //   path: ':id',
      //   component: CareerDetailsOutlet,
      //   outlet: 'right',
      // },
      // {
      //   path: 'filtrar',
      //   component: CareersFilterOutlet,
      //   outlet: 'left',
      // },

      {
        path: ':id',
        data: {
          breadcrumb: (data: { job: JobOut }) => {
            return data.job.title;
          },
        },
        resolve: { job: jobResolver },
        component: CareerDetailsContainer,
      },
      {
        path: '',
        component: CareersContainer,
      },
      {
        path: '',
        // outlet: 'left',
        pathMatch: 'prefix',
        redirectTo: 'filtrar',
      },
    ],
  },
];
