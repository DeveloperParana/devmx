import { EventFeatureShellComponent } from './event-feature-shell.component';
import { eventRoute, calendarRoute, EventsContainer, EventContainer } from './containers';
import { eventFeatureShellSidenav } from './event-feature-shell.sidenav';
import { AuthFacade, provideAccount } from '@devmx/account-data-access';
import { provideLocation } from '@devmx/location-data-access';
import { provideEvent } from '@devmx/event-data-access';
import { Route } from '@angular/router';
import {
  provideLayout,
  provideLayoutSidenav,
  provideLayoutToolbar,
} from '@devmx/shared-ui-global/layout';

export const eventFeatureShellRoutes: Route[] = [
  calendarRoute,
  eventRoute,
  {
    path: '',
    providers: [
      ...provideEvent(),
      ...provideAccount(),
      ...provideLocation(),
      provideLayoutToolbar(AuthFacade),
      provideLayoutSidenav(eventFeatureShellSidenav),
      provideLayout()
    ],
    component: EventFeatureShellComponent,
    children: [
      {
        path: ':id',
        data: {
          breadcrumb: 'Evento',
        },
        component: EventContainer,
      },
      {
        path: '',
        data: {
          breadcrumb: 'Eventos',
        },
        component: EventsContainer,
      },
    ],
  },
];
