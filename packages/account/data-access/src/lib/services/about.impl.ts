import { AboutService } from '@devmx/account-domain/client';
import { AccountOut } from '@devmx/shared-api-interfaces';
import { Env } from '@devmx/shared-api-interfaces/client';
import { HttpClient } from '@devmx/shared-data-access';

export class AboutServiceImpl implements AboutService {
  get url() {
    return `${this.env.api.url}/about`;
  }

  constructor(private http: HttpClient, private env: Env) {}

  findAccount(username: string) {
    return this.http.get<AccountOut>(`${this.url}/${username}`);
  }
}
