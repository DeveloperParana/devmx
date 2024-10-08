import { Username } from '../../lib/dtos';
import { Observable } from 'rxjs';
import {
  SignIn,
  SignUp,
  AuthUser,
  Challenge,
  AccessToken,
} from '@devmx/shared-api-interfaces';

export abstract class AuthService {
  abstract auth(): Observable<AuthUser>;

  abstract challenge(): Observable<Challenge>;

  abstract checkUsername(data: Username): Observable<void>;

  abstract signIn(data: SignIn): Observable<AccessToken>;

  abstract signUp(data: SignUp): Observable<AccessToken>;
}
