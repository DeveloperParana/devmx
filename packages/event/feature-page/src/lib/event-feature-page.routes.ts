import { EventFeaturePageComponent } from './event-feature-page.component';
import { eventFeaturePageProviders } from './event-feature-page.providers';
import { eventPageResolver, eventPageSchemaResolver } from './resolvers';
import { EventPage } from '@devmx/shared-api-interfaces';
import { EventPageContainer } from './containers';
import { Route } from '@angular/router';

export const eventFeaturePageRoutes: Route[] = [
  {
    path: ':id',
    providers: eventFeaturePageProviders,
    component: EventFeaturePageComponent,
    data: {
      breadcrumb: 'Evento',
    },
    resolve: { schema: eventPageSchemaResolver },
    children: [
      {
        path: '',
        data: {
          breadcrumb: (data: { page: EventPage }) => {
            return data.page.title;
          },
        },
        title: 'Sobre o evento',
        resolve: { page: eventPageResolver },
        component: EventPageContainer,
      },
    ],
  },
];
