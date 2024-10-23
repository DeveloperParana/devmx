import { EventFeatureAdminComponent } from './event-feature-admin.component';
import { MyEventsContainer } from './containers';
import { Route } from '@angular/router';

export const eventFeatureAdminRoutes: Route[] = [
  {
    path: '',
    data: {
      breadcrumb: 'Administração',
    },
    component: EventFeatureAdminComponent,
    children: [
      {
        path: 'meus-eventos/:id',
        data: {
          breadcrumb: 'Meus eventos',
        },
        component: MyEventsContainer,
      },
      {
        path: 'meus-eventos',
        data: {
          breadcrumb: 'Meus eventos',
        },
        component: MyEventsContainer,
      },
    ],
  },
];
