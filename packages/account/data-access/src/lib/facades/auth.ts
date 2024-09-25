import { SignIn, SignUp, AuthUser } from '@devmx/shared-api-interfaces';
import { State } from '@devmx/shared-data-access';
import { take } from 'rxjs';
import {
  SignInUseCase,
  SignUpUseCase,
  LoadAuthUserUseCase,
} from '@devmx/account-domain/client';
import { AccountLevel } from '@devmx/shared-util-data';

interface AuthState {
  user: AuthUser | null;
  level: AccountLevel | null;
  webauthAvailable: boolean | null;
}

export class AuthFacade extends State<AuthState> {
  user$ = this.select((state) => state.user);

  level$ = this.select((state) => state.level);

  connected$ = this.select(() => !!this.accessToken);

  get accessToken() {
    return localStorage.getItem('accessToken');
  }

  constructor(
    private signInUseCase: SignInUseCase,
    private signUpUseCase: SignUpUseCase,
    private loadAuthUserUseCase: LoadAuthUserUseCase
  ) {
    super({ user: null, level: null, webauthAvailable: null });
  }

  checkWebAuthn() {
    const webauthAvailable = 'PublicKeyCredential' in window;
    this.setState({ webauthAvailable });
  }

  loadAuthUser(force = false) {
    if (this.state.user && !force) return;

    const request$ = this.loadAuthUserUseCase.execute();

    const onAuthUser = (user: AuthUser) => {
      const level = new AccountLevel(user);

      this.setState({ user, level });
    };

    request$.pipe(take(1)).subscribe(onAuthUser);
  }

  signIn(data: SignIn) {
    const request$ = this.signInUseCase.execute(data);

    const onAuthUser = (user: AuthUser) => {
      this.setState({ user });
    };

    request$.pipe(take(1)).subscribe(onAuthUser);
  }

  signUp(data: SignUp) {
    const request$ = this.signUpUseCase.execute(data);

    const onAuthUser = (user: AuthUser) => {
      this.setState({ user });
    };

    request$.pipe(take(1)).subscribe(onAuthUser);
  }

  clearAccessToken() {
    localStorage.removeItem('accessToken');
  }
}
