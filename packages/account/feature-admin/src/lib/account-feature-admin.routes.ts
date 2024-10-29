import { AccountFeatureAdminComponent } from './account-feature-admin.component';
import { accountFeatureAdminProviders } from './account-feature-admin.providers';
import { AccountsContainer } from './containers';
import { Route } from '@angular/router';

export const accountFeatureAdminRoutes: Route[] = [
  {
    path: '',
    data: {
      breadcrumb: 'Administração',
    },
    providers: accountFeatureAdminProviders,
    component: AccountFeatureAdminComponent,
    children: [
      {
        path: 'contas',
        data: {
          breadcrumb: 'Contas',
        },
        component: AccountsContainer,
      },
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'contas',
      },
    ],
  },
];
