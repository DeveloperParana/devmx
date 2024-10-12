import { EventFeatureShellComponent } from './event-feature-shell.component';
import { eventFeatureShellSidenav } from './event-feature-shell.sidenav';
import { AuthFacade, provideAccount } from '@devmx/account-data-access';
import { EventDetailsContainer, EventsContainer } from './containers';
import { provideEvent } from '@devmx/event-data-access';
import { EventOut } from '@devmx/shared-api-interfaces';
import { EventFilterComponent } from './components';
import { eventResolver } from './resolvers';
import { Route } from '@angular/router';
import {
  provideLayout,
  provideLayoutSidenav,
  provideLayoutToolbar,
} from '@devmx/shared-ui-global/layout';

export const eventFeatureShellRoutes: Route[] = [
  {
    path: '',
    providers: [
      ...provideAccount(),
      ...provideEvent(),
      ...provideLayout(EventFilterComponent),
      provideLayoutToolbar(AuthFacade),
      provideLayoutSidenav(eventFeatureShellSidenav),
    ],
    data: {
      breadcrumb: 'Eventos',
    },
    component: EventFeatureShellComponent,
    children: [
      {
        path: '',
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
