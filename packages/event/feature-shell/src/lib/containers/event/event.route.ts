import { EventContainer } from './event.container';
import { EventScope } from './event.scope';
import { Route } from '@angular/router';

export const eventRoute: Route = {
  path: ':id',
  component: EventScope,
  children: [
    {
      path: '',
      component: EventContainer,
    },
  ],
};
