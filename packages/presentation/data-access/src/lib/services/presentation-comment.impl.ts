import { Page, PresentationCommentOut } from '@devmx/shared-api-interfaces';
import { Env } from '@devmx/shared-api-interfaces/client';
import { HttpClient } from '@devmx/shared-data-access';
import {
  CreatePresentationComment,
  PresentationCommentService,
  UpdatePresentationComment,
} from '@devmx/presentation-domain/client';
import { Observable } from 'rxjs';

export class PresentationCommentServiceImpl
  implements PresentationCommentService
{
  get url() {
    return `${this.env.api.url}/presentations`;
  }

  constructor(private http: HttpClient, private env: Env) {}

  // findOne(id: string): Observable<PresentationCommentOut> {
  //   const url = [`${this.url}/${i}/comments`, params.toString()];
  //   return this.http.get()
  // }

  update(
    id: string,
    data: UpdatePresentationComment
  ): Observable<PresentationCommentOut> {
    throw new Error('Method not implemented.');
  }

  remove(id: string): Observable<PresentationCommentOut> {
    throw new Error('Method not implemented.');
  }

  find(presentation: string, params: URLSearchParams) {
    const url = [`${this.url}/${presentation}/comments`, params.toString()];
    return this.http.get<Page<PresentationCommentOut>>(url.join('?'));
  }

  create(data: CreatePresentationComment) {
    const url = `${this.url}/${data.presentation}/comments`;
    return this.http.post<PresentationCommentOut>(url, data);
  }
}
