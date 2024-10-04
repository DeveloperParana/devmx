import { AccountFeatureAdminComponent } from './account-feature-admin.component';
import { Route } from '@angular/router';
import {
  EventContainer,
  EventsContainer,
  AccountsContainer,
} from './containers';

export const accountFeatureAdminRoutes: Route[] = [
  {
    path: '',
    component: AccountFeatureAdminComponent,
    children: [
      {
        path: 'contas',
        component: AccountsContainer,
      },
      {
        path: 'meus-eventos/:id',
        component: EventContainer,
      },
      {
        path: 'meus-eventos',
        component: EventsContainer,
      },
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'contas',
      },
    ],
  },
];
