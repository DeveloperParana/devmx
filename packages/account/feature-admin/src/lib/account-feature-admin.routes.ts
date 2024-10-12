import { AccountFeatureAdminComponent } from './account-feature-admin.component';
import { Event } from '@devmx/shared-api-interfaces';
import { eventResolver } from './resolvers';
import { Route } from '@angular/router';
import {
  EventContainer,
  EventsContainer,
  AccountsContainer,
} from './containers';

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
        path: 'meus-eventos/:id',
        data: {
          breadcrumb: (data: { event: Event }) => {
            return data.event.title;
          },
        },
        resolve: { event: eventResolver },
        component: EventContainer,
      },
      {
        path: 'meus-eventos',
        data: {
          breadcrumb: 'Meus eventos',
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
