import { AccountFeatureAdminComponent } from './account-feature-admin.component';
import { AccountsContainer } from './containers';
import { Route } from '@angular/router';

export const accountFeatureAdminRoutes: Route[] = [
  {
    path: '',
    component: AccountFeatureAdminComponent,
    children: [
      {
        path: '',
        component: AccountsContainer,
      },
    ],
  },
];
