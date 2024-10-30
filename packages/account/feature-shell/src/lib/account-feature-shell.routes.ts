import { AccountFeatureShellComponent } from './account-feature-shell.component';
import { provideAutocompleteCitiesService } from '@devmx/location-ui-forms';
import { SignOutContainer, SettingsContainer } from './containers';
import { provideFormDialog } from '@devmx/shared-ui-global/forms';
import { provideLocation } from '@devmx/location-data-access';
import { Route } from '@angular/router';
import {
  roleGroupsGuard,
  roleGroupGuard,
  roleGuard,
} from '@devmx/shared-ui-global/guards';

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
      ...provideLocation(),
      provideAutocompleteCitiesService(),
      provideFormDialog(),
    ],
    canActivate: [roleGuard('member')],
    component: AccountFeatureShellComponent,
    data: {
      breadcrumb: 'Conta',
    },
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
        path: 'configuracoes',
        data: {
          breadcrumb: 'Configurações',
        },
        component: SettingsContainer,
      },
      {
        path: 'sair',
        component: SignOutContainer,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'configuracoes',
      },
    ],
  },
];
