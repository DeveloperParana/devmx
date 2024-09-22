import { Observable } from 'rxjs';
import {
  SignIn,
  SignUp,
  AuthUser,
  AccessToken,
} from '@devmx/shared-api-interfaces';

export abstract class AuthService {
  abstract auth(): Observable<AuthUser>;

  abstract signIn(data: SignIn): Observable<AccessToken>;

  abstract signUp(data: SignUp): Observable<AccessToken>;
}
