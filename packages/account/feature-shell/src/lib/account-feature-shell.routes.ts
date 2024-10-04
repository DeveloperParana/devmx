import { AccountFeatureShellComponent } from './account-feature-shell.component';
import { accountFeatureShellSidenav } from './account-feature-shell.sidenav';
import { provideAutocompleteCitiesService } from '@devmx/location-ui-forms';
import { providePresentation } from '@devmx/presentation-data-access';
import { roleGroupsGuard, roleGroupGuard, roleGuard } from './guards';
import { provideLocations } from '@devmx/location-data-access';
import { provideAccount } from '@devmx/account-data-access';
import { provideSidenav } from '@devmx/shared-ui-global';
import { provideEvent } from '@devmx/event-data-access';
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
      ...providePresentation(),
      ...provideEvent(),
      ...provideLocations(),
      provideAutocompleteCitiesService(),
      provideSidenav(accountFeatureShellSidenav),
    ],
    component: AccountFeatureShellComponent,
    children: [
      {
        path: 'administracao',
        canActivate: [roleGroupsGuard('worthy', 'board')],
        loadChildren: async () => {
          return import('@devmx/account-feature-admin').then(
            (m) => m.accountFeatureAdminRoutes
          );
        },
      },
      {
        path: 'dashboard',
        canActivate: [roleGroupGuard('board')],
        loadChildren: async () => {
          return import('@devmx/account-feature-board').then(
            (m) => m.accountFeatureBoardRoutes
          );
        },
      },
      {
        path: 'minhas-apresentacoes/:id',
        canActivate: [roleGuard('speaker')],
        component: PresentationContainer,
      },
      {
        path: 'minhas-apresentacoes',
        canActivate: [roleGuard('speaker')],
        component: PresentationsContainer,
      },
      {
        path: 'configuracoes',
        component: SettingsContainer,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'configuracoes',
      },
    ],
  },
];
