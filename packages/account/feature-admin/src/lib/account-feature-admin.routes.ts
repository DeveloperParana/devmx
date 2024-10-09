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
        data: {
          breadcrumb: 'Contas'
        },
        component: AccountsContainer,
      },
      {
        path: 'meus-eventos/:id',
        component: EventContainer,
      },
      {
        path: 'meus-eventos',
        data: {
          breadcrumb: 'Meus eventos'
        },
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
