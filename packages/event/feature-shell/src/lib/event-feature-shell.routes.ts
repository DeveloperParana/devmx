import { EventFeatureShellComponent } from './event-feature-shell.component';
import { roleGuard } from '@devmx/shared-ui-global/guards';
import { provideEvent } from '@devmx/event-data-access';
import { Event } from '@devmx/shared-api-interfaces';
import { eventResolver } from './resolvers';
import { Route } from '@angular/router';
import {
  EventDetailsContainer,
  EventHomeContainer,
  EventsContainer,
} from './containers';

export const eventFeatureShellRoutes: Route[] = [
  {
    path: '',
    providers: [...provideEvent()],
    data: {
      breadcrumb: 'Eventos',
    },
    component: EventFeatureShellComponent,
    children: [
      {
        path: 'administracao',
        canActivate: [roleGuard('leader')],
        loadChildren: () =>
          import('@devmx/event-feature-admin').then(
            (m) => m.eventFeatureAdminRoutes
          ),
      },
      {
        path: '',
        component: EventsContainer,
      },
      {
        path: ':id',
        data: {
          breadcrumb: (data: { event: Event }) => {
            return data.event.title;
          },
        },
        resolve: { event: eventResolver },
        component: EventDetailsContainer,
        outlet: 'right',
      },
      {
        path: '',
        component: EventHomeContainer,
      },
    ],
  },
];
