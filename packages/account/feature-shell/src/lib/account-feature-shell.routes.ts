import { AccountFeatureShellComponent } from './account-feature-shell.component';
import { PresentationsContainer, SettingsContainer } from './containers';
import { Route } from '@angular/router';
import {
  provideAuthFacade,
  provideAuthService,
  providePresentationFacade,
  providePresentationService,
} from '@devmx/account-data-access';

export const accountFeatureShellRoutes: Route[] = [
  {
    path: 'auth',
    loadChildren: () =>
      import('@devmx/account-feature-auth').then(
        (m) => m.accountFeatureAuthRoutes
      ),
  },
  {
    path: '',
    providers: [
      provideAuthService(),
      provideAuthFacade(),
      providePresentationService(),
      providePresentationFacade(),
    ],
    component: AccountFeatureShellComponent,
    children: [
      {
        path: 'settings',
        component: SettingsContainer,
      },
      {
        path: 'presentations',
        component: PresentationsContainer,
      },
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'settings',
      },
    ],
  },
];
