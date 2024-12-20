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
  CopyEvent,
} from '@devmx/shared-api-interfaces';

export class EventHttpServiceImpl
  extends HttpService<Event>
  implements EventService
{
  findAll(params: QueryParams<Event>) {
    const url = [`${this.url}/all`, createQueryParams(params)];
    return this.http.get<Page<Event>>(url.join('?'));
  }

  findUntil(params: QueryParams<Event>) {
    const url = [`${this.url}/until`, createQueryParams(params)];
    return this.http.get<Page<Event>>(url.join('?'));
  }

  findDateRange(start: Date, end: Date, params: QueryParams<Event>) {
    const url = [
      `${this.url}/range/${start}/${end}`,
      createQueryParams(params),
    ];
    return this.http.get<Page<Event>>(url.join('?'));
  }

  findMyEvents(params: QueryParams<Event>) {
    const url = [`${this.url}/my`, createQueryParams(params)];
    return this.http.get<Page<Event>>(url.join('?'));
  }

  copy(id: string, data: CopyEvent) {
    const url = [this.url, id, 'copy'];
    return this.http.patch<Event>(url.join('/'), data);
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
