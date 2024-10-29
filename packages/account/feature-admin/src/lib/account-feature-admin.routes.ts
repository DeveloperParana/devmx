import { AccountFeatureAdminComponent } from './account-feature-admin.component';
import { AccountsContainer } from './containers';
import { Route } from '@angular/router';

export const accountFeatureAdminRoutes: Route[] = [
  {
    path: '',
    data: {
      breadcrumb: 'Administração',
    },
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
