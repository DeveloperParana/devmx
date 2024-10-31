import { EventFeatureAdminComponent } from './event-feature-admin.component';
import { eventFeatureAdminProviders } from './event-feature-admin.providers';
import { Event } from '@devmx/shared-api-interfaces';
import { eventResolver } from './resolvers';
import { Route } from '@angular/router';
import {
  EventContainer,
  ManageEventsContainer,
  MyEventsContainer,
} from './containers';
import { rolesGuard } from '@devmx/shared-ui-global/guards';

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
        component: EventContainer,
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
        component: MyEventsContainer,
      },
      {
        path: 'gerenciar-eventos',
        data: {
          breadcrumb: 'Gerenciar eventos',
        },
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
