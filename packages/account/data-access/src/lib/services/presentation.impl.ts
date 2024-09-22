import { HttpClient, createQueryParams, Env } from '@devmx/shared-data-access';
import { PresentationService } from '@devmx/account-domain/client';
import {
  Page,
  QueryParams,
  Presentation,
  PresentationOut,
} from '@devmx/shared-api-interfaces';

export class PresentationServiceImpl implements PresentationService {
  get url() {
    return `${this.env.api.url}/presentations`;
  }

  constructor(private http: HttpClient, private env: Env) {}

  findPresentations(params: QueryParams<Presentation>) {
    const url = [this.url, createQueryParams(params)];
    return this.http.get<Page<PresentationOut>>(url.join('?'));
  }

  create(presentation: Presentation) {
    return this.http.post<PresentationOut>(this.url, presentation);
  }

  update(id: string, presentation: Presentation) {
    return this.http.patch<PresentationOut>(`${this.url}/${id}`, presentation);
  }
}
