import { CityService } from '@devmx/location-domain/client';
import { City, Page } from '@devmx/shared-api-interfaces';
import { Env } from '@devmx/shared-api-interfaces/client';
import { LocationFilter } from '@devmx/location-domain';
import { HttpClient } from '@devmx/shared-data-access';
import { createParams } from '@devmx/shared-util-data';

export class CityServiceImpl implements CityService {
  get url() {
    return `${this.env.api.url}/locations`;
  }

  constructor(private http: HttpClient, private env: Env) {}

  find(params: URLSearchParams) {
    const url = [this.url, 'cities', params.toString()];
    return this.http.get<Page<City>>(url.join('?'));
  }

  search(name: string) {
    const url = [this.url, 'cities', 'search', name];
    return this.http.get<City[]>(url.join('/'));
  }

  findByLocation(filter: LocationFilter) {
    const params = createParams(filter);
    const endpoint = [this.url, 'cities', 'near'];
    const url = [endpoint.join('/'), params.toString()];
    return this.http.get<City[]>(url.join('?'));
  }

  findOne(id: string) {
    return this.http.get<City>(`${this.url}/cities/${id}`);
  }
}
