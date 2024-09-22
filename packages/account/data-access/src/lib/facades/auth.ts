import { AuthService } from '@devmx/account-domain/client';
import { State } from '@devmx/shared-data-access';
import { take } from 'rxjs';
import {
  SignIn,
  SignUp,
  AuthUser,
  AccessToken,
} from '@devmx/shared-api-interfaces';

interface AuthState {
  user: AuthUser | null;
}

export class AuthFacade extends State<AuthState> {
  user$ = this.select((state) => state.user);

  connected$ = this.select(() => !!this.accessToken);

  get accessToken() {
    return localStorage.getItem('accessToken');
  }

  constructor(private authService: AuthService) {
    super({ user: null });
  }

  loadAuthUser() {
    const request$ = this.authService.auth().pipe(take(1));
    request$.subscribe((user) => this.setState({ user }));
  }

  signIn(data: SignIn) {
    const request$ = this.authService.signIn(data);
    request$.pipe(take(1)).subscribe(this.#saveToken);
  }

  signUp(data: SignUp) {
    const request$ = this.authService.signUp(data);
    request$.pipe(take(1)).subscribe(this.#saveToken);
  }

  clearAccessToken() {
    localStorage.removeItem('accessToken');
  }

  #saveToken = ({ accessToken }: AccessToken) => {
    localStorage.setItem('accessToken', accessToken);
    this.loadAuthUser();
  };
}
