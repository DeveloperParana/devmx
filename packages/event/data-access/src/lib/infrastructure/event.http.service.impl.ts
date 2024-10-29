import { HttpClient, HttpService } from '@devmx/shared-data-access';
import { EventService } from '@devmx/event-domain/client';
import { Env } from '@devmx/shared-api-interfaces/client';
import { Event } from '@devmx/shared-api-interfaces';

export class EventHttpServiceImpl
  extends HttpService<Event>
  implements EventService {}

export function provideEventHttpService() {
  return {
    provide: EventService,
    useFactory(http: HttpClient, env: Env) {
      return new EventHttpServiceImpl(http, env, 'events');
    },
    deps: [HttpClient, Env],
  };
}
