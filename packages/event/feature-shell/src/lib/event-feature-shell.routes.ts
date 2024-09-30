import { EventFeatureShellComponent } from './event-feature-shell.component';
import { provideAccount } from '@devmx/account-data-access';
import { provideEvent } from '@devmx/event-data-access';
import { EventsContainer } from './containers';
import { Route } from '@angular/router';

export const eventFeatureShellRoutes: Route[] = [
  {
    path: '',
    providers: [...provideEvent(), ...provideAccount()],
    component: EventFeatureShellComponent,
    children: [
      {
        path: '',
        component: EventsContainer,
      },
    ],
  },
];
