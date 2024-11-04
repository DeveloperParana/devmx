import { CreateUser, ValidateUserCode } from '@devmx/account-domain';
import { AuthenticationService } from '@devmx/account-domain/client';
import { Env } from '@devmx/shared-api-interfaces/client';
import { HttpClient } from '@devmx/shared-data-access';
import { Observable } from 'rxjs';
import {
  User,
  AccessToken,
  ResponseMessage,
  Authentication,
} from '@devmx/shared-api-interfaces';

export class AuthenticationHttpServiceImpl implements AuthenticationService {
  get url() {
    return `${this.env.api.url}/${this.endpoint}`;
  }

  constructor(
    protected http: HttpClient,
    protected env: Env,
    protected endpoint: string
  ) {}

  load() {
    return this.http.get<Authentication>(this.url);
  }

  createUser(data: CreateUser): Observable<User> {
    const url = [this.url, 'create-user'];
    return this.http.post(url.join('/'), data);
  }

  sendUserCode(name: string) {
    return this.http.post<ResponseMessage>(this.url, { name });
  }

  validateUserCode(data: ValidateUserCode) {
    const url = [this.url, 'validate'];
    return this.http.post<AccessToken>(url.join('/'), data);
  }
}

export function provideAuthenticationHttpService() {
  return {
    provide: AuthenticationService,
    useFactory(http: HttpClient, env: Env) {
      return new AuthenticationHttpServiceImpl(http, env, 'authentication');
    },
    deps: [HttpClient, Env],
  };
}
