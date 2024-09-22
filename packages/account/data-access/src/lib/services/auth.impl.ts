import { HttpClient, Env } from '@devmx/shared-data-access';
import { AuthService } from '@devmx/account-domain';
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

  signIn(data: SignIn) {
    return this.http.post<AccessToken>(`${this.url}/sign-in`, data);
  }

  signUp(data: SignUp) {
    return this.http.post<AccessToken>(`${this.url}/sign-up`, data);
  }
}
