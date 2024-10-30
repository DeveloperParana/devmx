import { AccountCompleteService } from '@devmx/account-ui-shared';
import { AccountRef } from '@devmx/shared-api-interfaces';
import { Env } from '@devmx/shared-api-interfaces/client';
import { HttpClient } from '@devmx/shared-data-access';

export class AccountCompleteServiceImpl implements AccountCompleteService {
  constructor(private http: HttpClient, private env: Env) {}

  complete(query: string) {
    return this.http.get<AccountRef[]>(
      `${this.env.api.url}/accounts/complete/${query}`
    );
  }
}

export function provideAccountComplete() {
  return {
    provide: AccountCompleteService,
    useClass: AccountCompleteServiceImpl,
    deps: [HttpClient, Env],
  };
}
