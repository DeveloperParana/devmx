import { Address, AddressService } from '@devmx/location-domain/client';
import { HttpClient } from '@devmx/shared-data-access';
import { createParams } from '@devmx/shared-util-data';

export class AddressServiceImpl implements AddressService {
  #api = `https://nominatim.openstreetmap.org/search`;

  constructor(private http: HttpClient) {}

  findLocationByAddress(q: string) {
    const params = createParams({ q, format: 'json', limit: 1 });
    const url = [this.#api, params.toString()];
    return this.http.get<Address>(url.join('?'));
  }
}
