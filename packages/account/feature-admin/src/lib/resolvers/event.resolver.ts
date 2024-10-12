import { EventFacade } from '@devmx/event-data-access';
import { Event } from '@devmx/shared-api-interfaces';
import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { filter } from 'rxjs';

export const eventResolver: ResolveFn<Event> = (route) => {
  const facade = inject(EventFacade);
  facade.loadOne(route.params['id']);
  return facade.event$.pipe(filter((event) => !!event));
};
