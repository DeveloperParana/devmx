import { EntityService, Env } from '@devmx/shared-api-interfaces/client';
import { createQueryParams } from '@devmx/shared-util-data';
import { HttpClient } from '../ports';
import {
  Page,
  Entity,
  QueryParams,
  EditableEntity,
} from '@devmx/shared-api-interfaces';

export abstract class HttpService<T extends Entity>
  implements EntityService<T>
{
  get url() {
    return `${this.env.api.url}/${this.endpoint}`;
  }

  constructor(
    protected http: HttpClient,
    protected env: Env,
    protected endpoint: string
  ) {}

  create(data: EditableEntity<T>) {
    return this.http.post<T>(this.url, data);
  }

  find(params: QueryParams<T>) {
    const url = [this.url, createQueryParams(params)];
    return this.http.get<Page<T>>(url.join('?'));
  }

  findOne(id: string) {
    const url = [this.url, id];
    return this.http.get<T>(url.join('/'));
  }

  update(id: string, data: EditableEntity<T>) {
    const url = [this.url, id];
    return this.http.patch<T>(url.join('/'), data);
  }

  delete(id: string) {
    const url = [this.url, id];
    return this.http.delete<T>(url.join('/'));
  }
}
