import { EventPageSchema } from '@devmx/shared-api-interfaces';
import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import {
  EventFacade,
  eventSchemaResolverWrapped,
} from '@devmx/event-data-access';

export const eventPageSchemaResolver: ResolveFn<EventPageSchema> = (route) => {
  return eventSchemaResolverWrapped(inject(EventFacade), route.params);
};
