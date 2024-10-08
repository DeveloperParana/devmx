import { SearchLeadersService } from '@devmx/account-api-interfaces/client';
import { AccountOut, Page } from '@devmx/shared-api-interfaces';
import { Env } from '@devmx/shared-api-interfaces/client';
import { HttpClient } from '@devmx/shared-data-access';

export class SearchLeadersServiceImpl implements SearchLeadersService {
  get url() {
    return `${this.env.api.url}/accounts`;
  }

  constructor(private http: HttpClient, private env: Env) {}

  search(params: URLSearchParams) {
    const url = [this.url, params.toString()];
    return this.http.get<Page<AccountOut>>(url.join('?'));
  }
}
