import { AccountFeatureAdminComponent } from './account-feature-admin.component';
import { accountFeatureAdminProviders } from './account-feature-admin.providers';
import { UserContainer, UsersContainer } from './containers';
import { User } from '@devmx/shared-api-interfaces';
import { userResolver } from './resolvers';
import { Route } from '@angular/router';

export const accountFeatureAdminRoutes: Route[] = [
  {
    path: '',
    data: {
      breadcrumb: 'Administração',
    },
    title: 'Administrar conta',
    providers: accountFeatureAdminProviders,
    component: AccountFeatureAdminComponent,
    children: [
      {
        path: 'usuarios',
        data: {
          breadcrumb: 'Usuários',
        },
        title: 'Contas de usuários',
        component: UsersContainer,
      },
      {
        path: 'usuarios/:id',
        data: {
          breadcrumb: (data: { user: User }) => {
            return data.user.displayName;
          },
        },
        title: 'Usuário',
        resolve: { user: userResolver },
        component: UserContainer,
      },
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'usuarios',
      },
    ],
  },
];
