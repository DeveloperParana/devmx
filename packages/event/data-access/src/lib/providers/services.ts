import { EventService } from '@devmx/event-domain/client';
import { Env } from '@devmx/shared-api-interfaces/client';
import { HttpClient } from '@devmx/shared-data-access';
import { EventServiceImpl } from '../services';

export function provideEventService() {
  return {
    provide: EventService,
    useFactory(http: HttpClient, env: Env) {
      return new EventServiceImpl(http, env);
    },
    deps: [HttpClient, Env],
  };
}
