import { EventPage } from '@devmx/shared-api-interfaces';
import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import {
  EventFacade,
  eventPageResolverWrapped,
} from '@devmx/event-data-access';

export const eventPageResolver: ResolveFn<EventPage> = (route) => {
  const params = route.parent ? route.parent.params : route.params;
  return eventPageResolverWrapped(inject(EventFacade), params);
};
