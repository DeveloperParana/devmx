import { AccountFeatureShellComponent } from './account-feature-shell.component';
import { providePresentation } from '@devmx/presentation-data-access';
import { provideAccount } from '@devmx/account-data-access';
import { Route } from '@angular/router';
import {
  SettingsContainer,
  PresentationContainer,
  PresentationsContainer,
} from './containers';

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
      ...provideAccount(),
      ...providePresentation()
    ],
    component: AccountFeatureShellComponent,
    children: [
      {
        path: 'presentations/:id',
        component: PresentationContainer,
      },
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
        pathMatch: 'full',
        redirectTo: 'settings',
      },
    ],
  },
];
