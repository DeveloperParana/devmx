import { Env } from '@devmx/shared-api-interfaces/client';
import { AuthService } from '@devmx/account-domain/client';
import { HttpClient } from '@devmx/shared-data-access';
import { Username } from '@devmx/account-domain';
import {
  SignIn,
  SignUp,
  AuthUser,
  AccessToken,
} from '@devmx/shared-api-interfaces';

export class AuthServiceImpl implements AuthService {
  get url() {
    return `${this.env.api.url}/auth`;
  }

  constructor(private http: HttpClient, private env: Env) {}

  auth() {
    return this.http.get<AuthUser>(this.url);
  }

  checkUsername(data: Username) {
    return this.http.post<void>(`${this.url}/username`, data);
  }

  signIn(data: SignIn) {
    return this.http.post<AccessToken>(`${this.url}/sign-in`, data);
  }

  signUp(data: SignUp) {
    return this.http.post<AccessToken>(`${this.url}/sign-up`, data);
  }
}
