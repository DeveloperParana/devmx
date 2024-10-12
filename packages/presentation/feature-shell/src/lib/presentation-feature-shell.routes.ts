import { PresentationFeatureShellComponent } from './presentation-feature-shell.component';
import { presentationFeatureShellSidenav } from './presentation-feature-shell.sidenav';
import { AuthFacade, provideAccount } from '@devmx/account-data-access';
import { providePresentation } from '@devmx/presentation-data-access';
import { PresentationOut } from '@devmx/shared-api-interfaces';
import { PresentationFilterComponent } from './components';
import { presentationResolver } from './resolvers';
import { Route } from '@angular/router';
import {
  PresentationDetailsContainer,
  PresentationsContainer,
} from './containers';
import {
  provideLayout,
  provideLayoutSidenav,
  provideLayoutToolbar,
} from '@devmx/shared-ui-global/layout';

export const presentationFeatureShellRoutes: Route[] = [
  {
    path: '',
    providers: [
      ...provideAccount(),
      ...providePresentation(),
      ...provideLayout(PresentationFilterComponent),
      provideLayoutToolbar(AuthFacade),
      provideLayoutSidenav(presentationFeatureShellSidenav),
    ],
    data: {
      breadcrumb: 'Apresentações',
    },
    component: PresentationFeatureShellComponent,
    children: [
      {
        path: '',
        component: PresentationsContainer,
      },
      {
        path: ':id',
        data: {
          breadcrumb: (data: { presentation: PresentationOut }) => {
            return data.presentation.title;
          },
        },
        resolve: { presentation: presentationResolver },
        component: PresentationDetailsContainer,
        outlet: 'right',
      },
    ],
  },
];
