import { EventFeatureShellComponent } from './event-feature-shell.component';
import { eventRoute, calendarRoute, EventsContainer } from './containers';
import { eventFeatureShellSidenav } from './event-feature-shell.sidenav';
import { AuthFacade, provideAccount } from '@devmx/account-data-access';
import { provideLocation } from '@devmx/location-data-access';
import { provideEvent } from '@devmx/event-data-access';
import { EventsLeftOutlet } from './outlets';
import { Route } from '@angular/router';
import {
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
    ],
    component: EventFeatureShellComponent,
    children: [
      {
        path: '',
        component: EventsLeftOutlet,
        outlet: 'left',
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
