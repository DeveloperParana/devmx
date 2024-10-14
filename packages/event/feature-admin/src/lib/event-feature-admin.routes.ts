import { MyEventsContainer } from './containers/my-events/my-events.container';
import { EventFeatureAdminComponent } from './event-feature-admin.component';
import { Route } from '@angular/router';

export const eventFeatureAdminRoutes: Route[] = [
  {
    path: '',
    component: EventFeatureAdminComponent,
    children: [
      {
        path: 'meus-eventos',
        component: MyEventsContainer,
      },
    ],
  },
];
