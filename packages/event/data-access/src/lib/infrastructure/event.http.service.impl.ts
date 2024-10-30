import { Event, RSVP, RSVPStatus } from '@devmx/shared-api-interfaces';
import { HttpClient, HttpService } from '@devmx/shared-data-access';
import { EventService } from '@devmx/event-domain/client';
import { Env } from '@devmx/shared-api-interfaces/client';

export class EventHttpServiceImpl
  extends HttpService<Event>
  implements EventService
{
  createRSVP(event: string, status: RSVPStatus) {
    const url = [this.url, event, 'rsvps'];
    return this.http.post<RSVP>(url.join('/'), { status });
  }

  findRSVPByEvent(event: string) {
    const url = [this.url, event, 'rsvps'];
    return this.http.get<RSVP[]>(url.join('/'));
  }
}

export function provideEventHttpService() {
  return {
    provide: EventService,
    useFactory(http: HttpClient, env: Env) {
      return new EventHttpServiceImpl(http, env, 'events');
    },
    deps: [HttpClient, Env],
  };
}
