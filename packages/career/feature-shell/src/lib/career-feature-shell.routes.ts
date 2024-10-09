import { CareerFeatureShellComponent } from './career-feature-shell.component';
import { careerFeatureShellSidenav } from './career-feature-shell.sidenav';
import { AuthFacade, provideAccount } from '@devmx/account-data-access';
import { CareerDetailsOutlet, CareersFilterOutlet } from './outlets';
import { provideCareer } from '@devmx/career-data-access';
import { CareersContainer } from './containers';
import { Route } from '@angular/router';
import {
  provideLayout,
  provideLayoutSidenav,
  provideLayoutToolbar,
} from '@devmx/shared-ui-global/layout';

export const careerFeatureShellRoutes: Route[] = [
  {
    path: '',
    providers: [
      ...provideAccount(),
      ...provideCareer(),
      ...provideLayout(CareersFilterOutlet),
      provideLayoutToolbar(AuthFacade),
      provideLayoutSidenav(careerFeatureShellSidenav),
    ],
    component: CareerFeatureShellComponent,
    children: [
      {
        path: ':id',
        component: CareerDetailsOutlet,
        outlet: 'right',
      },
      {
        path: 'filtrar',
        component: CareersFilterOutlet,
        outlet: 'left',
      },
      {
        path: '',
        component: CareersContainer,
        data: {
          breadcrumb: 'Carreiras',
        },
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
