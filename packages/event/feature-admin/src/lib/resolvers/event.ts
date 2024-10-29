import { EventFacade, eventResolverWrapped } from '@devmx/event-data-access';
import { Event } from '@devmx/shared-api-interfaces';
import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';

export const eventResolver: ResolveFn<Event> = (route) => {
  return eventResolverWrapped(inject(EventFacade), route.params);
};
