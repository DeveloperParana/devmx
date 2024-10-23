import { EventFeatureShellComponent } from './event-feature-shell.component';
import { EventDetailsContainer, EventsContainer } from './containers';
import { provideEvent } from '@devmx/event-data-access';
import { EventOut } from '@devmx/shared-api-interfaces';
import { eventResolver } from './resolvers';
import { Route } from '@angular/router';

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
        providers: [...provideEvent()],
        loadChildren: () =>
          import('@devmx/event-feature-admin').then(
            (m) => m.eventFeatureAdminRoutes
          ),
      },
      {
        path: '',
        data: {
          breadcrumb: 'Eventos',
        },
        component: EventsContainer,
      },
      {
        path: ':id',
        data: {
          breadcrumb: (data: { event: EventOut }) => {
            return data.event.title;
          },
        },
        resolve: { event: eventResolver },
        component: EventDetailsContainer,
        outlet: 'right',
      },
    ],
  },
];
