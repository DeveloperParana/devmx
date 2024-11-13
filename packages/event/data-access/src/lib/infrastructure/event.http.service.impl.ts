import { HttpClient, HttpService } from '@devmx/shared-data-access';
import { EventService } from '@devmx/event-domain/client';
import { Env } from '@devmx/shared-api-interfaces/client';
import { createQueryParams } from '@devmx/shared-util-data';
import {
  Page,
  RSVP,
  Event,
  RSVPStatus,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export class EventHttpServiceImpl
  extends HttpService<Event>
  implements EventService
{
  findAll(params: QueryParams<Event>) {
    const url = [`${this.url}/all`, createQueryParams(params)];
    return this.http.get<Page<Event>>(url.join('?'));
  }

  createRSVP(event: string, status: RSVPStatus) {
    const url = [this.url, event, 'rsvps'];
    return this.http.post<RSVP>(url.join('/'), { status });
  }

  findRSVPByEvent(event: string) {
    const url = [this.url, event, 'rsvps'];
    return this.http.get<RSVP[]>(url.join('/'));
  }

  findRSVPConfirmedByEvent(event: string) {
    const url = [this.url, event, 'rsvps', 'confirmed'];
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
