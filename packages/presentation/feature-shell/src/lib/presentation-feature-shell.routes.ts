import { PresentationFeatureShellComponent } from './presentation-feature-shell.component';
import { presentationFeatureShellSidenav } from './presentation-feature-shell.sidenav';
import { AuthFacade, provideAccount } from '@devmx/account-data-access';
import { providePresentation } from '@devmx/presentation-data-access';
import { Route } from '@angular/router';
import {
  PresentationDetailsContainer,
  PresentationsContainer,
} from './containers';
import {
  provideLayoutSidenav,
  provideLayoutToolbar,
} from '@devmx/shared-ui-global/layout';

export const presentationFeatureShellRoutes: Route[] = [
  {
    path: '',
    providers: [
      ...provideAccount(),
      ...providePresentation(),
      provideLayoutToolbar(AuthFacade),
      provideLayoutSidenav(presentationFeatureShellSidenav),
    ],
    data: {
      breadcrumb: 'Apresentações'
    },
    component: PresentationFeatureShellComponent,
    children: [
      {
        path: ':id',
        component: PresentationDetailsContainer,
        outlet: 'right',
      },
      {
        path: ':id',
        component: PresentationsContainer,
      },
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'todas'
      }
    ],
  },
];
