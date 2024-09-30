import { EventOut, Page } from '@devmx/shared-api-interfaces';
import { Env } from '@devmx/shared-api-interfaces/client';
import { HttpClient } from '@devmx/shared-data-access';

export class EventServiceImpl {
  get url() {
    return `${this.env.api.url}/events`;
  }

  constructor(private http: HttpClient, private env: Env) {}

  find(params: URLSearchParams) {
    const url = [this.url, params.toString()];
    return this.http.get<Page<EventOut>>(url.join('?'));
  }

  findOne(id: string) {
    return this.http.get<EventOut>(`${this.url}/${id}`);
  }

  create(data: Event) {
    return this.http.post<EventOut>(this.url, data);
  }

  update(id: string, data: Event) {
    return this.http.patch<EventOut>(`${this.url}/${id}`, data);
  }

  remove(id: string) {
    return this.http.delete<EventOut>(`${this.url}/${id}`);
  }
}
