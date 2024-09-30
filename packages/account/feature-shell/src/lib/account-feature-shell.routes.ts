import { AccountFeatureShellComponent } from './account-feature-shell.component';
import { provideAutocompleteCitiesService } from '@devmx/location-ui-forms';
import { providePresentation } from '@devmx/presentation-data-access';
import { provideLocations } from '@devmx/location-data-access';
import { roleGroupsGuard, roleGroupGuard } from './guards';
import { Route } from '@angular/router';
import {
  provideAccount,
  provideAccountNavFacade,
} from '@devmx/account-data-access';
import {
  SettingsContainer,
  PresentationContainer,
  PresentationsContainer,
} from './containers';
import { provideSidenav } from '@devmx/shared-ui-global';

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
      ...provideLocations(),
      provideAutocompleteCitiesService(),
      provideSidenav([
        {
          path: ['/account', 'settings'],
          text: 'Configurações',
          roles: ['member'],
          icon: 'settings',
        },
        {
          path: ['/account', 'presentations'],
          text: 'Apresentações',
          roles: ['speaker'],
          icon: 'collections_bookmark',
        },
        {
          path: ['/account', 'board'],
          text: 'Dashboard',
          icon: 'dashboard',
          roles: ['director', 'manager'],
        },
        {
          path: ['/account', 'admin'],
          text: 'Administração',
          icon: 'admin_panel_settings',
          roles: ['director', 'manager', 'leader', 'staff', 'fellow'],
        }
      ]),
    ],
    component: AccountFeatureShellComponent,
    children: [
      {
        path: 'admin',
        canActivate: [roleGroupsGuard('worthy', 'board')],
        loadChildren: async () => {
          return import('@devmx/account-feature-admin').then(
            (m) => m.accountFeatureAdminRoutes
          );
        },
      },
      {
        path: 'board',
        canActivate: [roleGroupGuard('board')],
        loadChildren: async () => {
          return import('@devmx/account-feature-board').then(
            (m) => m.accountFeatureBoardRoutes
          );
        },
      },
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
