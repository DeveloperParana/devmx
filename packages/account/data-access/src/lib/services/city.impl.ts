import { CityService } from '@devmx/account-domain/client';
import { City, Page } from '@devmx/shared-api-interfaces';
import { Env } from '@devmx/shared-api-interfaces/client';
import { HttpClient } from '@devmx/shared-data-access';

export class CityServiceImpl implements CityService {
  get url() {
    return `${this.env.api.url}/accounts`;
  }

  constructor(private http: HttpClient, private env: Env) {}

  find(params: URLSearchParams) {
    const url = [this.url, params.toString()];
    return this.http.get<Page<City>>(url.join('?'));
  }

  findOne(id: string) {
    return this.http.get<City>(`${this.url}/${id}`);
  }
}
