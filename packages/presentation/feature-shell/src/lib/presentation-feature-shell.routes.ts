import { PresentationFeatureShellComponent } from './presentation-feature-shell.component';
import { presentationFeatureShellSidenav } from './presentation-feature-shell.sidenav';
import { PresentationContainer, PresentationsContainer } from './containers';
import { AuthFacade, provideAccount } from '@devmx/account-data-access';
import { providePresentation } from '@devmx/presentation-data-access';
import { Route } from '@angular/router';
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
    component: PresentationFeatureShellComponent,
    children: [
      {
        path: ':id',
        component: PresentationContainer,
      },
      {
        path: '',
        component: PresentationsContainer,
      },
    ],
  },
];
