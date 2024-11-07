import { AccountFeatureShellComponent } from './account-feature-shell.component';
import { accountFeatureShellProviders } from './account-feature-shell.providers';
import { roleGuard, rolesGuard } from '@devmx/shared-ui-global/guards';
import { Route } from '@angular/router';
import {
  ProfileContainer,
  SecurityContainer,
  SettingsContainer,
  SignOutContainer,
  SocialContainer,
} from './containers';

export const accountFeatureShellRoutes: Route[] = [
  {
    path: 'autenticacao',
    loadChildren: () =>
      import('@devmx/account-feature-auth').then(
        (m) => m.accountFeatureAuthRoutes
      ),
  },
  {
    path: '',
    canActivate: [roleGuard('member')],
    providers: accountFeatureShellProviders,
    component: AccountFeatureShellComponent,
    data: {
      breadcrumb: 'Conta',
    },
    children: [
      {
        path: 'administracao',
        canActivate: [rolesGuard('manager', 'director', 'staff', 'leader')],
        loadChildren: async () => {
          return import('@devmx/account-feature-admin').then(
            (m) => m.accountFeatureAdminRoutes
          );
        },
      },
      {
        path: 'dashboard',
        canActivate: [rolesGuard('manager', 'director')],
        loadChildren: async () => {
          return import('@devmx/account-feature-board').then(
            (m) => m.accountFeatureBoardRoutes
          );
        },
      },
      {
        path: 'configuracoes',
        component: SettingsContainer,
        children: [
          {
            path: 'perfil',
            component: ProfileContainer,
          },
          {
            path: 'social',
            component: SocialContainer,
          },
          {
            path: 'seguranca',
            component: SecurityContainer,
          },
          {
            path: '',
            pathMatch: 'prefix',
            redirectTo: 'perfil',
          },
        ],
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
