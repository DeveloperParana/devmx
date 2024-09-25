import { PresentationService } from '@devmx/presentation-domain/client';
import { Env } from '@devmx/shared-api-interfaces/client';
import { HttpClient } from '@devmx/shared-data-access';
import {
  Page,
  Presentation,
  PresentationOut,
} from '@devmx/shared-api-interfaces';

export class PresentationServiceImpl implements PresentationService {
  get url() {
    return `${this.env.api.url}/presentations`;
  }

  constructor(private http: HttpClient, private env: Env) {}

  find(params: URLSearchParams) {
    const url = [this.url, params.toString()];
    return this.http.get<Page<PresentationOut>>(url.join('?'));
  }

  findOne(id: string) {
    return this.http.get<PresentationOut>(`${this.url}/${id}`);
  }

  create(data: Presentation) {
    return this.http.post<PresentationOut>(this.url, data);
  }

  update(id: string, data: Presentation) {
    return this.http.patch<PresentationOut>(`${this.url}/${id}`, data);
  }

  remove(id: string) {
    return this.http.delete<PresentationOut>(`${this.url}/${id}`);
  }
}
