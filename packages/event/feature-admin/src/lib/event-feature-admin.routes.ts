import { EventFeatureAdminComponent } from './event-feature-admin.component';
import { eventFeatureAdminProviders } from './event-feature-admin.providers';
import { rolesGuard } from '@devmx/shared-ui-global/guards';
import { Event } from '@devmx/shared-api-interfaces';
import { eventResolver } from './resolvers';
import { Route } from '@angular/router';
import {
  EventContainer,
  ManageEventsContainer,
  MyEventsContainer,
} from './containers';

export const eventFeatureAdminRoutes: Route[] = [
  {
    path: '',
    data: {
      breadcrumb: 'Administração',
    },
    providers: eventFeatureAdminProviders,
    component: EventFeatureAdminComponent,
    children: [
      {
        path: 'meus-eventos/novo',
        data: {
          breadcrumb: 'Novo',
        },
        title: 'Novo evento',
        component: EventContainer,
      },
      {
        path: 'meus-eventos/:id',
        data: {
          breadcrumb: (data: { event: Event }) => {
            return data.event.title;
          },
        },
        title: 'Meu evento',
        resolve: { event: eventResolver },
        component: EventContainer,
      },
      {
        path: 'meus-eventos',
        data: {
          breadcrumb: 'Meus eventos',
        },
        title: 'Meus eventos',
        component: MyEventsContainer,
      },
      {
        path: 'gerenciar-eventos',
        data: {
          breadcrumb: 'Gerenciar eventos',
        },
        title: 'Gerenciar eventos',
        canActivate: [rolesGuard('director', 'manager', 'staff')],
        component: ManageEventsContainer,
      },
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'meus-eventos',
      },
    ],
  },
];
