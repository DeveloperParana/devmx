import { AccountFeatureShellComponent } from './account-feature-shell.component';
import { accountFeatureShellProviders } from './account-feature-shell.providers';
import { roleGuard, rolesGuard } from '@devmx/shared-ui-global/guards';
import { Route } from '@angular/router';
import {
  AccountContainer,
  HomeContainer,
  SignOutContainer,
} from './containers';
import { accountResolver } from './resolvers';

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
    title: 'Conta',
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
        title: 'Configurações da conta',
        component: AccountContainer,
        resolve: { user: accountResolver },
      },
      {
        path: 'sair',
        title: 'Sair',
        component: SignOutContainer,
      },
      {
        path: '',
        title: 'Inicio',
        component: HomeContainer,
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'configuracoes',
      },
    ],
  },
];
